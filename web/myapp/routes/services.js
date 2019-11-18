var express = require('express');
var router = express.Router();

  // Data insert
  var massages=`[{
    "id": 1,
    "imagePath": "/images/services/SWEDISHMASSAGE.jpg",
    "type": "Massage",
    "subType":"Classic",
    "title": "SWEDISH MASSAGE",
    "description":"The perfect balance between toning and relaxation. Leave your stresses behind and feel your tensions melt away.",
    "price60":128,
    "price90":173
  },{
    "id": 2,
    "imagePath": "/images/services/Deeptissue.jpg",
    "type": "Massage",
    "subType":"Specialty",
    "title": "DEEP TISSUE MASSAGE",
    "description":"The targeted and deep movements of this massage are particularly effective in releasing chronic tension.",
    "price60":143,
    "price90":0
  },{
    "id": 3,
    "imagePath": "/images/services/hotstone.jpg",
    "type": "Massage",
    "subType":"Specialty",
    "title": "HOT STONE MASSAGE",
    "description":"This soothing massage combines firm touch with the gentleness of warm basalt stones, leaving you feeling completely relaxed.",
    "price60":0,
    "price90":183
  },{
    "id": 4,
    "imagePath": "/images/services/hydrothermia.jpg",
    "type": "Massage",
    "subType":"Specialty",
    "title": "HYDROTHERMËA MASSAGE",
    "description":"Combining the benefits of temperature variation and exfoliation, this signature treatment allows for muscle recovery and an increase in blood circulation.",
    "price60":0,
    "price90":183
  },{
    "id": 5,
    "imagePath": "/images/services/guidedthermal.jpg",
    "type": "Massage",
    "subType":"Specialty",
    "title": "GUIDED THERMAL CYCLE AND MASSAGE",
    "description":"Enjoy a personalized experience adapted for you by your massage therapist with a therapeutic massage and guided thermal cycle.",
    "price60":0,
    "price90":183
  },{
    "id": 6,
    "imagePath": "/images/services/momtobe.jpg",
    "type": "Massage",
    "subType":"Classic",
    "title": "MOM-TO-BE MASSAGE",
    "description":"Our prenatal massage allows expecting mothers to relax while relieving discomfort and fatigue.",
    "price60":128,
    "price90":0
  }]`

  var bodycare=`[{
    "id": 7,
    "imagePath": "/images/services/UrbanDetox.jpg",
    "type": "Body Care",
    "subType":"Classic",
    "title": "URBAN DETOX FACE CARE",
    "description":"New Face Care : Urban Detox face care is designed to fight the effects of daily stress and pollution for a healthier skin and glowing complexion.",
    "price60":118,
    "price90":0
  },{
    "id": 8,
    "imagePath": "/images/services/HimalayanSalt.jpg",
    "type": "Body Care",
    "subType":"Classic",
    "title": "HIMALAYAN SALT TREATMENT",
    "description":"A three-step body treatment that includes a gentle massage using Himalayan salt stones, an exfoliating scrub, and a rich moisturizing cream.",
    "price60":118,
    "price90":0
  },{
    "id": 9,
    "imagePath": "/images/services/relaxation-treatment.jpg",
    "type": "Body Care",
    "subType":"Classic",
    "title": "RELAXATION TREATMENT",
    "description":"Our most comforting and relaxing body treatment features aromatherapy, exfoliation, and a warm wax treatment.",
    "price60":118,
    "price90":0
  },{
    "id": 10,
    "imagePath": "/images/services/vivifying.jpg",
    "type": "Body Care",
    "subType":"Classic",
    "title": "VIVIFYING TREATMENT",
    "description":"This treatment revitalizes and detoxifies, utilizing exfoliation and mud to massage your back and an invigorating leg treatment followed by a mini facial.",
    "price60":118,
    "price90":0
  },{
    "id": 11,
    "imagePath": "/images/services/face-care.jpg",
    "type": "Body Care",
    "subType":"Classic",
    "title": "FACE CARE",
    "description":"More than just a facial, this treatment will be specifically adapted to your skin’s unique needs. Our careful attention to your pressure points ensure the greatest state of relaxation.",
    "price60":118,
    "price90":0
  },{
    "id": 12,
    "imagePath": "/images/services/foot-care.jpg",
    "type": "Body Care",
    "subType":"Classic",
    "title": "FOOT CARE",
    "description":"This soothing and luxurious treatment is the complete care package for your nails, feet, and legs. Healthier and softer looking skin awaits.",
    "price60":118,
    "price90":0
  }]`
/* GET home page. */
router.get('/', function(req, res, next) {
var jsonServices=JSON.parse(massages)
var jsonBodycare=JSON.parse(bodycare)
 res.render('services', { title: 'Spa Services',heading:"Services", services: jsonServices,Bodycare:jsonBodycare}); 
});

module.exports = router;