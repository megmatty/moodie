const Entry = require('../app/models/entries');

//Add Entry
exports.addEntry = function(req, res, next) {
  console.log('tangerine');
  console.log(req.body);
  let entry = new Entry(req.body.entries);
  console.log(entry);
  entry.save();
  return res.status(200).json({message: 'return this for socket.io'});
};

//Find All Entries
exports.findAllEntries = function(req, res, next) {
	console.log('olive');
	console.log(req.user);
	Entry.find({})
		.exec((err, entries) => {
	    if (err) {
	      res.send({ error: err });
	      return next(err);
	    }
	    return res.status(200).json({ entries: entries });
	})
}

//Get User
exports.findUser = function(req, res, next) {
	console.log(req.user);
	console.log('raspberry');
	Entry.find({})
		.exec((err, entries) => {
	    if (err) {
	      res.send({ error: err });
	      return next(err);
	    }
	    return res.status(200).json({ entries: entries });
	})
}


