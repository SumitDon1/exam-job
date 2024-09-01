function fetchExams() {
    const qualification = document.getElementById("qualification").value;
    const examList = document.getElementById("examList");
    examList.innerHTML = ""; // Clear previous results

    if (!qualification) {
        return; // Exit if no qualification is selected
    }

    const exams = {
        "10th": [
            { name: "SSC MTS", info: "Multi-Tasking Staff exam conducted by SSC.", url: "https://ssc.nic.in" },
            { name: "Railway Group D", info: "Entry-level jobs in Indian Railways.", url: "https://www.rrbcdg.gov.in" },
            { name: "State Police Constable", info: "State-level police constable recruitment exams.", url: "https://www.sarkariresult.com" },
            { name: "Army Soldier (General Duty)", info: "Entry-level soldier positions in the Indian Army.", url: "https://joinindianarmy.nic.in" },
            { name: "Home Guard", info: "Recruitment for Home Guard positions in various states.", url: "https://www.ncs.gov.in" }
        ],
        "12th": [
            { name: "SSC CHSL", info: "Combined Higher Secondary Level Exam for clerical positions.", url: "https://ssc.nic.in" },
            { name: "NDA Exam", info: "National Defence Academy entrance exam for 12th pass candidates.", url: "https://www.nda.nic.in" },
            { name: "IBPS Clerk", info: "Clerical exam for public sector banks in India.", url: "https://www.ibps.in" },
            { name: "Railway Loco Pilot", info: "Assistant Loco Pilot exam in Indian Railways.", url: "https://www.rrbcdg.gov.in" },
            { name: "Air Force Group X & Y", info: "Recruitment exam for technical and non-technical trades in Indian Air Force.", url: "https://airmenselection.cdac.in" }
        ],
        "bsc": [
            { name: "IBPS PO", info: "Probationary Officer exam for various public sector banks.", url: "https://www.ibps.in" },
            { name: "UPSC CDS", info: "Combined Defence Services exam conducted by UPSC.", url: "https://www.upsc.gov.in" },
            { name: "SSC CGL", info: "Combined Graduate Level Exam for recruitment in government departments.", url: "https://ssc.nic.in" },
            { name: "Indian Forest Service (IFS)", info: "Exam for recruitment to forestry services conducted by UPSC.", url: "https://www.upsc.gov.in" },
            { name: "NABARD Grade A & B", info: "Officer recruitment exam for the National Bank for Agriculture and Rural Development.", url: "https://www.nabard.org" }
        ],
        "msc": [
            { name: "NET Exam", info: "National Eligibility Test for teaching and research.", url: "https://ugcnet.nta.nic.in" },
            { name: "CSIR NET", info: "Council of Scientific and Industrial Research NET exam.", url: "https://csirnet.nta.nic.in" },
            { name: "GATE", info: "Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.", url: "https://gate.iitb.ac.in" },
            { name: "ICMR JRF", info: "Junior Research Fellowship for biomedical research.", url: "https://www.icmr.nic.in" },
            { name: "Agricultural Research Scientist (ARS)", info: "Recruitment for scientists in the agricultural sector.", url: "https://www.asrb.org.in" }
        ],
        "btech": [
            { name: "GATE", info: "Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.", url: "https://gate.iitb.ac.in" },
            { name: "IES", info: "Indian Engineering Services exam conducted by UPSC.", url: "https://www.upsc.gov.in" },
            { name: "ISRO Scientist/Engineer", info: "Recruitment for scientists/engineers in ISRO.", url: "https://www.isro.gov.in" },
            { name: "BARC OCES/DGFS", info: "Training program for scientific officers at Bhabha Atomic Research Centre.", url: "https://www.barc.gov.in" },
            { name: "State Public Service Commission (PSC)", info: "Engineering posts in various state government departments.", url: "https://psc.ap.gov.in" }
        ],
        "mtech": [
            { name: "PhD Entrance Exam", info: "Various PhD entrance exams conducted by universities.", url: "https://csirnet.nta.nic.in" },
            { name: "DRDO Scientist Entry", info: "Recruitment for scientists in DRDO.", url: "https://www.drdo.gov.in" },
            { name: "ISRO Scientist/Engineer SC", info: "Higher level scientist positions in ISRO.", url: "https://www.isro.gov.in" },
            { name: "Naval Armament Inspectorate (NAI)", info: "Recruitment for NAI cadre in the Indian Navy.", url: "https://www.joinindiannavy.gov.in" },
            { name: "Teaching Assistant", info: "Teaching roles in engineering colleges.", url: "https://www.facultyplus.com" }
        ],
        "phd": [
            { name: "Postdoctoral Fellowship", info: "Fellowship opportunities in various research institutes.", url: "https://www.serbonline.in/SERB/HomePage" },
            { name: "Assistant Professor Positions", info: "Vacancies for assistant professors in universities.", url: "https://www.ugc.ac.in" },
            { name: "Research Scientist", info: "Research roles in private and public research organizations.", url: "https://www.csir.res.in" },
            { name: "Policy Research Fellow", info: "Fellowship opportunities in government think tanks.", url: "https://www.orfonline.org" },
            { name: "Chief Scientist", info: "Senior scientific roles in government and private organizations.", url: "https://www.nature.com/naturecareers" }
        ]
    };

    if (exams[qualification]) {
        exams[qualification].forEach(exam => {
            const examElement = document.createElement("div");
            examElement.classList.add("exam-item", "mt-2", "p-2", "border", "rounded");
            examElement.innerHTML = `<strong>${exam.name}</strong>: ${exam.info} <a href="${exam.url}" target="_blank">Learn More</a>`;
            examList.appendChild(examElement);
        });
    }
}
