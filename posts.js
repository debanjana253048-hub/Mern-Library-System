const express = require("express");
const router = express.Router();
const multer = require("multer");
const Book = require("../db/models/post");
const Request = require("../db/models/request");
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  const existing = await Book.findOne({ title: req.body.title });

  if (existing) {
    existing.count += 1;
    await existing.save();
    return res.json(existing);
  }

  const book = await Book.create({
    title: req.body.title,
    author: req.body.author,
    image: req.file?.path || ""
  });

  res.json(book);
});

router.get("/", async (req, res) => {
  try {
    const { filter } = req.query;

    let matchStage = {};

    if (filter === "low") {
      matchStage = { count: { $lt: 5 } };
    }

    if (filter === "mid") {
      matchStage = {
        count: { $gte: 5, $lte: 10 }
      };
    }

    if (filter === "high") {
      matchStage = {
        count: { $gt: 10 }
      };
    }

    const books = await Book.aggregate([
      {
        $match: matchStage
      },
      {
        $sort: { count: -1 }
      }
    ]);

    res.json(books);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;

router.post("/request", async (req, res) => {
  try {
    const { title, requestedBy } = req.body;

    let book = await Book.findOne({ title });

    if (book) {
      book.count += 1;
      await book.save();
    } else {
      book = await Book.create({
        title,
        author: "Unknown",
        count: 1
      });
    }

    const request = await Request.create({
      bookTitle: title,
      requestedBy
    });

    res.json({
      success: true,
      message: "Book requested successfully",
      request
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});