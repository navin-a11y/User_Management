//const fs = require("fs");
const Tour = require('./../Data-Model/practice-model');

exports.getTour = async (req, res) => {
    try{
       const tour = await Tour.findById(req.params.id);
        // tour.findOne({ _id: req.params.id })
       res.status(200).json({
        status : 'success',
        data : {
            tour
        }
    });
    }catch(err){
        res.status(404).json({
            status:'Failed!!',
            message: err
        });
    }
};

exports.createTour = async(req, res) => {
    try {
         // const newTour = new Tour({})
        // newTour.save();
        const newTour = await Tour.create(req.body)

        res.status(201).json({
            status : 'success',
            data : {
                tour: newTour
            }
        });
    }catch(err) {
        res.status(400).json({
            status : 'Failed!!',
            message: err
        });
    }
};


exports.updateTour = async(req, res) => {
    try{
        //used in PATCH method
        const tour = await Tour.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status : 'Success',
            data : {
                tour: tour
            }
        });
    } catch(err){
        res.status(400).json({
            status : 'Failed!!',
            message: err
        });
    }
};

exports.deleteTour = async(req, res) => { 
        try{
        await Tour.findByIdAndDelete({_id: req.params.id});
        
        res.status(204).json({
            status : 'Success',
            data : null
        });
    }catch(err){
        res.status(400).json({
            status : 'Failed!!',
            message: err
        });
    }
};