import Book from "../model/bookModel.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json(error);
  }
};
export const getSearchedData = async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    // Simple search implementation
    const results = await Book.find({
      name: new RegExp(query, "i"),
    });

    res.json(results);
  } catch (error) {
    res.status(500).send("Error occurred while searching");
  }
};
