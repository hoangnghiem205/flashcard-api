'use strict';

module.exports = function(model) {

    var lessonsCtrl = {};

    lessonsCtrl.list = function (req, res, next) {
        var page = 1;
        if(req.params.page) {page = parseInt(req.params.page);}
        model.findPaginated({}, function (err, lessons) {
            if (err) { return next(err); }
            res.json(lessons.documents);  
        }, 10, page);
    };
    
    lessonsCtrl.search = function(req, res, next) {
        model.find(req.query, function (err, lessons) {
            if (err) { return next(err); }
            res.json(lessons);  
        });
    }

    lessonsCtrl.get = function (req, res, next) {
        model.findById(req.params.id, function (err, lessons) {
            if (err) { return next(err); }
            res.json(lessons);
        });
    };

    lessonsCtrl.post = function (req, res, next) {
        model.create(req.body, function (err, lessons) {
            if (err) { return next(err); }
            res.json(lessons);
        });
    };

    lessonsCtrl.put = function(req, res, next) {
        model.findOneAndUpdate({_id: req.params.id}, req.body, function (err, lessons) {
            if (err) { return next(err); }
            res.json(lessons); 
        })
    }

    lessonsCtrl.remove = function(req, res, next) {
        model.remove({ _id: req.params.id }, function (err) {
          if (err) return handleError(err);
          res.json({id: req.params.id, message: 'delete completed'});
        });
    }
    
    return lessonsCtrl;
}