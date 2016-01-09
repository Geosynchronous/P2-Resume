'use strict';
// George Fischer's main source of javascript code for Resume Project.
// Data sets for bio, education, work, publications (Pending) and projects.
// TODO - Also create informative detailed data sets for Mapl location overlays.
//	Reminder:	Use encapsulation and functions to organize and display data.
var bio = {
    'name': "George Fischer",
    'role': "Web Developer",
    'welcomeMessage': "Developer with strong background in science, technology, engineering, education and math.",
    'contacts': {
        'mobile': "801-318-0621",
        'email': "geosynchronous@mac.com",
        'github': "Geosynchronous",
        'twitter': "@geosynchronous",
        'location': "Salt Lake City"
    },
    'skills': [
        "Front-End Web",
        "Courseware",
        "Physics",
        "Programming",
        "Electronics"
    ],
    'biopic': "images/me.jpg",
};



var education = {
    'schools': [{
        'name': "University of Utah",
        'location': "Salt Lake City, UT, US",
        'degree': "Master of Science",
        'majors': ["Physics"],
        'date': 1980,
        'url': "http://www.utah.edu/"
    }, {
        'name': "University of Utah",
        'location': "Salt Lake City, UT, US",
        'degree': "Bachelor of Science",
        'majors': ["Biology"],
        'date': 1977,
        'url': "http://www.utah.edu/"
    }, {
        'name': "University of Utah",
        'location': "Salt Lake City, UT, US",
        'degree': "Education Certification",
        'majors': ["Secondary School Instructor"],
        'date': 1984,
        'url': "http://www.utah.edu/"
    }],
    'onlineCourses': [{
        'title': "Front-End Web Development",
        'school': "Udacity",
        'date': 2016,
        'url': "http://www.udacity.com/courses/all"
    }]
};



var work = {
    'jobs': [{
        'employer': "City Academy Charter School",
        'title': "Engineering Teacher",
        'location': "Salt Lake City, UT, US",
        'dates': "2013 - 2014",
        "description": "Taught Digital Electronics Course & Engineering Design Courses with AutodDesk Inventor 3D-CAD."
    }, {
        'employer': "Home",
        'title': "Domestic Engineer",
        'location': "Salem, UT, US",
        'dates': "1995 - 2013",
        'description': "Did the Mr. Mom thing in a semi-rural location.  Supplemented public education with additional home schooling."
    }, {
        'employer': "Math Department, University of Utah",
        'title': "LAN Coordinator",
        'location': "Salt Lake City, UT, US",
        'dates': "1993 - 1995",
        'description': "Assisted Network Administrator serving departmental users & maintaining netowrk infrastructure."
    }, {
        'employer': "Wasatch Educations Systems",
        'title': "Courseware Developer",
        'location': "Salt Lake City, UT, US",
        'dates': "1986 - 1993",
        'description': "Developed interactive mastery physics and adult education courseware. Developed simulations and teacher guides."
    }, {
        'employer': "Park City High School",
        'title': "Physics & Biology Teacher",
        'location': "Park City, UT, US",
        'dates': "1985 - 1986",
        'description': "Taught Physics and Biology, with an emphasis on labwork."
    }, {
        'employer': "Wasatch Education Systems",
        'title': "Programmer",
        'location': "Salt Lake City, UT, US",
        'dates': "1984 - 1985",
        'description': "Programmed biology courseware and simulations."
    }, {
        'employer': "National Solar Observatory",
        'title': "Physics Intern",
        'location': "Sunspot, NM, US",
        'dates': "Summer 1984",
        'description': "Designed and tested rugged stand-alone solar tracking data loggers for worldwide remote mountain-top surveys."
    }, {
        'employer': "Quartex",
        'title': "Research Engineer",
        'location': "Salt Lake City, UT, US",
        'dates': "1983",
        'description': "R&D for crystal oscillator technologies, used in lab weighing scales. Eliminated reproducibility production problems."
    }, {
        'employer': "Eaton Kenway",
        'title': "Electrical Engineer",
        'location': "Salt Lake City, UT, US",
        'dates': "1982",
        'description': "Storage-retrieval robot development and configuration."
    }, {
        'employer': "Physics, University of Utah",
        'title': "Electrical Engineer",
        'location': "Seattle, WA, US",
        'dates': "1981",
        'description': "Finished Cosmic Ray Research work on Fly's Eye Project. A data acquisition array of 80 large UV telescopes."
    }, {
        'employer': "Physics, University of Utah",
        'title': "Teaching Assistant",
        'location': "Salt Lake City, UT, US",
        'dates': "1978 - 1981",
        'description': "Taught graduate level analog & digital electronics, and computer interfacing labs."
    }, {
        'employer': "University of Utah",
        'title': "Research Assistant",
        'location': "Salt Lake City, UT, US",
        'dates': "1974 - 1980",
        'description': "As a student, worked in chemistry, molecular biology, biochemistry and physics labs."
    }]
};



var projects = {
    'projects': [{
        'title': "Portfolio",
        'dates': "Oct-Nov 2015",
        'description': "Udacity Nanodegree Front-End Web Design project to create a website portfolio.",
        'images': [
            "images/PortfolioMobile_small.jpg",
            "images/PortfolioMain_small.jpg"
        ]
    }, {
        'title': "Healthcare Website",
        'dates': "Jan-March 2009",
        'description': "Created a set of interactive webpages for Full Circle Care, and Naturopathic Clinic.",
        'images': [
            "images/health_small.jpg"
        ]
    }, {
        'title': "Physics Courseware",
        'dates': "1989-2000",
        'description': "Designed and developed an interactive physics course on sound, with real-world simulations and a simulated lab with measurirng instruments.",
        'images': [
            "images/Sound_wave_small.jpg",
            "images/spectrogram_small.jpg",
            "images/Modulated_wave_small.jpg"
            // Above placeholder Images from WikiMedia
        ]
    }]
};



// TODO - Create var objects and arrays for PUBLICATIONS hese.



// Display Bio and Contact Info at top of page, and duplicate Contact Info in footer.

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header")
    	.prepend(formattedRole)
    	.prepend(formattedName);

    for (var contact in bio.contacts) {
        if (bio.contacts.hasOwnProperty(contact)) {
            var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
            formattedContact = formattedContact.replace("%contact%", contact);
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        }
    }

    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header")
        .append(formattedImage)
    	.append(formattedWelcome);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(val) {

            var formattedSkill = HTMLskills.replace("%data%", val);
            $("#header").append(formattedSkill);
        });
    }
};

bio.display();



// Display Education Category and Attributes.

education.display = function() {

	education.schools.forEach(function(val) {

            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", val.name);
            	formattedName = formattedName + HTMLschoolDegree.replace("%data%", val.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", val.date);
            var formattedLocation = HTMLschoolLocation.replace("%data%", val.location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", val.majors);
            $(".education-entry:last")
            	.append(formattedName)
            	.append(formattedDates)
            	.append(formattedLocation)
            	.append(formattedMajor);
    });

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(val) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", val.title);
            	formattedTitle = formattedTitle + HTMLonlineSchool.replace("%data%", val.school);
            var formattedDate = HTMLonlineDates.replace("%data%", val.date);
            var formattedURL = HTMLonlineURL.replace("%data%", val.url);
            formattedURL = formattedURL.replace("%url%", val.url);
            $(".education-entry:last")
            	.append(formattedTitle)
            	.append(formattedDate)
            	.append(formattedURL);
    });
};

education.display();



// Display Work Experience Categories and Attributes

work.display = function() {

    work.jobs.forEach(function(val) {

            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", val.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", val.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", val.location);
            var formattedDates = HTMLworkDates.replace("%data%", val.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", val.description);
            $(".work-entry:last")
            	.append(formattedEmployerTitle)
            	.append(formattedLocation)
            	.append(formattedDates)
            	.append(formattedDescription);
    });
};

work.display();



// Display Project section and attributes.

projects.display = function() {

    projects.projects.forEach(function(val) {

            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", val.title);
            var formattedDates = HTMLprojectDates.replace("%data%", val.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", val.description);
            $(".project-entry:last")
            	.append(formattedTitle)
            	.append(formattedDates)
            	.append(formattedDescription);

            if (val.images.length > 0) {
                val.images.forEach(function(image) {
                        var formattedImage = HTMLprojectImage.replace("%data%", image);
                        $(".project-entry:last").append(formattedImage);
                });
            }
    });
};

projects.display();



// TODO - Create encapsulated PUBLICATIONS functions here.

// TODO - Create Map Data for Conservation Work, Forest Service, German Studies, place of birth.



//Display Map

$("#mapDiv").append(googleMap);

