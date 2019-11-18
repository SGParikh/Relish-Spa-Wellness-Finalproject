var express = require('express');
var router = express.Router();
// Data insert
var gallery=`[{
  "id": 1,
  "imagePath": "/images/gallery/Reception.jpg",
  "title": "Reception"
},{
  "id": 2,
  "imagePath": "/images/gallery/Arrival_Lounge1.jpg",
  "title": "Arrival Lounge"
},{
  "id": 3,
  "imagePath": "/images/gallery/Arrival-lounge.jpg",
  "title": "Seating Area"
},{
  "id": 4,
  "imagePath": "/images/gallery/Couples_Treatment_Room.jpg",
  "title": "Couples Treatment Room"
},{
  "id": 5,
  "imagePath": "/images/gallery/room1.jpg",
  "title": "Massage Room"
},{
  "id": 6,
  "imagePath": "/images/gallery/rooms.jpg",
  "title": "Body Care Room"
},{
  "id": 7,
  "imagePath": "/images/gallery/foot-care.jpg",
  "title": "Foot Care Room"
},{
  "id": 8,
  "imagePath": "/images/gallery/hot-tub.jpg",
  "title": "Hot Tub Room"
},{
  "id": 9,
  "imagePath": "/images/gallery/fitnessroom.jpg",
  "title": "Fitness Room"
},{
  "id": 10,
  "imagePath": "/images/gallery/Steam_Room.jpg",
  "title": "Steam Room"
},{
  "id": 11,
  "imagePath": "/images/gallery/Relaxation-lounge.jpg",
  "title": "Relaxation lounge"
},{
  "id": 12,
  "imagePath": "/images/gallery/lockerroom.jpg",
  "title": "Locker Room"
},{
  "id": 13,
  "imagePath": "/images/gallery/outsidearea.jpg",
  "title": "Outside Area"
}]`

/* GET home page. */
router.get('/', function(req, res, next) {
  var jsonGallery=JSON.parse(gallery)
  res.render('gallery', { title: 'Gallery',heading:"Gallery", Galleries: jsonGallery });
});


module.exports = router;