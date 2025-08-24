import shortid from "shortid";
import { URL } from "../model/url.model.js";

export const handleUrlShortener = async (req, res) => {
  try {
    console.log("Request Body: ", req.body);

    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "URL is required" });
    }

    const urlSave = await URL.create({
      shortUrl: shortid.generate(),
      urlName: originalUrl,
    });

    console.log("URL saved:", urlSave.shortUrl);
    res.status(201).json({ message: "Success", shortUrl: urlSave.shortUrl });
  } catch (error) {
    console.error("handleUrlShortener Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const handleShortId = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const data = await URL.findOneAndUpdate({shortUrl},
            {$push:{urlHistory:{accessAt:Date.now()}}},
            { new: true });

        if (!data) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        res.redirect(data.urlName);
    } catch (error) {
        console.error("handleShortId:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


