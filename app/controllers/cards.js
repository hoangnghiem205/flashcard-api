'use strict';

module.exports = function(model) {

    var cardsCtrl = {};

    cardsCtrl.list = function (req, res, next) {
        var page = 1;
        if(req.params.page) {page = parseInt(req.params.page);}
        model.findPaginated({}, function (err, cards) {
            if (err) { return next(err); }
            res.json(cards.documents);  
        }, 10, page);
    };
    
    cardsCtrl.search = function(req, res, next) {
        model.find(req.query, function (err, cards) {
            if (err) { return next(err); }
            res.json(cards);  
        });
    }

    cardsCtrl.get = function (req, res, next) {
        model.findById(req.params.id, function (err, cards) {
            if (err) { return next(err); }
            res.json(cards);
        });
    };

    cardsCtrl.post = function (req, res, next) {
        model.create(req.body, function (err, cards) {
            if (err) { return next(err); }
            res.json(cards);
        });
    };

    cardsCtrl.put = function(req, res, next) {
        model.findOneAndUpdate({_id: req.params.id}, req.body, function (err, cards) {
            if (err) { return next(err); }
            res.json(cards); 
        })
    }

    cardsCtrl.remove = function(req, res, next) {
        model.remove({ _id: req.params.id }, function (err) {
          if (err) return handleError(err);
          res.json({id: req.params.id, message: 'delete completed'});
        });
    }
    
    return cardsCtrl;
}