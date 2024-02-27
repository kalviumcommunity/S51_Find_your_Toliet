const Data = [
    {
      "name": "Sravana stores restroom",
      "type": "paid",
      "location": "chromepet",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.25028389491!2d80.14073907441225!3d12.95583001522512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e4ccf1b3981%3A0x26be7a6171ea21ab!2sSuper%20Saravana%20Stores%20-%20Chrompet!5e0!3m2!1sen!2sin!4v1708322114123!5m2!1sen!2sin",
      "rating": 3
    },
    {
      "name": "Public toilet",
      "type": "free",
      "location": "Perungalathur",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.085834847308!2d80.09142077441142!3d12.902202016397325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f75001d98cf3%3A0xc1676dfcf42f9b0!2sShriram%20Park%2063!5e0!3m2!1sen!2sin!4v1708322160786!5m2!1sen!2sin",
      "rating": 2
    },
    {
      "name": "Junction restroom",
      "type": "paid",
      "location": "Tambaram",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7187214885757!2d80.1153086744118!3d12.925791315882279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9b825fca05%3A0x767b405eb8e31340!2sTambaram%20Railway%20Station!5e0!3m2!1sen!2sin!4v1708322177327!5m2!1sen!2sin",
      "rating": 4
    },
    {
      "name": "Junction restroom",
      "type": "paid",
      "location": "Pallavaram",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.0260993637482!2d80.15155978843964!3d12.968511710634521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e37409b58af%3A0xd8d0ff5697714124!2sPallavaram%20Railway%20Station%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!5e0!3m2!1sen!2sin!4v1708322192781!5m2!1sen!2sin",
      "rating": 3
    },
    {
      "name": "Sravana stores restroom",
      "type": "free",
      "location": "T-nagar",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9737116973956!2d80.22483657530752!3d13.037345280673126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526638f8bc6bd3%3A0x1e5433e6f8deec53!2sSuper%20Saravana%20Stores%20-%20T.Nagar!5e0!3m2!1sen!2sin!4v1708322244232!5m2!1sen!2sin",
      "rating": 3
    },
    {
      "name": "Airport restroom",
      "type": "free",
      "location": "Tirusulam",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8551962278757!2d80.15704807441269!3d12.981112014671018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1f5da86397%3A0x21092f216ee26e47!2sChennai%20International%20Airport!5e0!3m2!1sen!2sin!4v1708322271399!5m2!1sen!2sin" ,
      "rating": 3
    },
    {
      "name": "Public busstand restroom",
      "type": "free",
      "location": "Koyambedu",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5220710721965!2d80.20327027441402!3d13.066065012801493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266bc921ecb3d%3A0x71bed8853f7ceaad!2skoyambedu%20bus%20terminus%2C%20Koyambedu%2C%20Chennai%2C%20Tamil%20Nadu%20600107!5e0!3m2!1sen!2sin!4v1708322285981!5m2!1sen!2sin",
      "rating": 2
    },
    {
      "name": "Cafe abarica restroom",
      "type": "paid",
      "location": "Anna nagar",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1848221576643!2d80.21571577441433!3d13.08747021232871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526425b5425ff1%3A0xaed0e526982093f1!2sCafe%20Arabica!5e0!3m2!1sen!2sin!4v1708322308024!5m2!1sen!2sin",
      "rating": 4
    },
    {
      "name": "Metro restroom",
      "type": "free",
      "location": "Ashok nagar",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.190815243243!2d80.22121027441335!3d13.02351756373925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670f83b1d613%3A0xad1939d450b34f39!2sSaidapet%20Railwya%20Station%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu%20600015!5e0!3m2!1sen!2sin!4v1708322365805!5m2!1sen!2sin",
      "rating": 4
    },
    {
      "name": "Railway station restroom",
      "type": "paid",
      "location": "Saidapet",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.190815243243!2d80.22121027441335!3d13.02351756373925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670f83b1d613%3A0xad1939d450b34f39!2sSaidapet%20Railwya%20Station%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu%20600015!5e0!3m2!1sen!2sin!4v1708322365805!5m2!1sen!2sin",
      "rating": 2
    },
    {
      "name": "Nexus mall restroom",
      "type": "paid",
      "location": "Vada palani",
      "map_src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990474.507032053!2d77.59140554272447!3d12.994509640987198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c2084f9c3b%3A0x54b9629cc45d76f0!2sNexus%20Vijaya%20Mall!5e0!3m2!1sen!2sin!4v1708322381702!5m2!1sen!2sin" ,
      "rating": 4
    },
    {
      "name": "Aero hub restroom",
      "type": "Paid",
      "location": "Tirusulam",
      "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8537078669133!2d80.16161667441264!3d12.981207164668895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fa1f3f6b9af%3A0xdbbc63ae5a21d6f4!2sPVR%20AEROHUB!5e0!3m2!1sen!2sin!4v1708322399534!5m2!1sen!2sin",
      "rating": 4
    }
  ]
  
  
  
  

  export default Data