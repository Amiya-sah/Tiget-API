const express = require('express');
//const review = require('../models/review');
//const router = express.Router();
const Review = require('../models/review');



exports.getPost = (req, res) => {
   try {
        const review = Review.find()
        .then((review) => {
         return res.status(200).json({
             post: review
         })
     });
   } catch (error) {
    res.send("Error is " + error);
   }
}

exports.createPost = (req, res) => {
   try {
   
      const review = new Review({
         reviewerName: req.body.reviewerName,
         reviewComment: req.body.reviewComment,
         rating: req.body.rating,
         //date: req.body.date
      })
 
    
       const r1 = review.save();
       res.json(r1);
       
   } catch (error) {
       res.send("Error is " + error);
   }
 }
 
