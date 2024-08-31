
function fetchExams() {
    const qualification = document.getElementById("qualification").value;
    const examList = document.getElementById("examList");
    examList.innerHTML = ""; 

    if (!qualification) {
        return; 
    }

    const exams = {
        "10th": [
            { name: "NDA Exam", info: "National Defence Academy Exam for joining the armed forces." },
            { name: "RRC Group D", info: "Railway Recruitment Cell Group D exam for various posts." },
            { name: "SSC MTS", info: "Staff Selection Commission Multi-Tasking Staff for clerical and administrative roles." },
            { name: "Indian Navy MR", info: "Indian Navy Matric Recruit for positions such as Chef, Steward, and Hygienist." }
        ],
        "11th": [
            { name: "NTSE", info: "National Talent Search Examination for scholarships." },
            { name: "KVPY", info: "Kishore Vaigyanik Protsahan Yojana for scholarships in basic sciences." },
            { name: "JEE (Main) Preparation", info: "Early preparation for JEE Main exam for engineering colleges." }
        ],
        "12th": [
            { name: "JEE Main", info: "Joint Entrance Examination for admission to engineering colleges." },
            { name: "NEET", info: "National Eligibility cum Entrance Test for medical courses." },
            { name: "CLAT", info: "Common Law Admission Test for admission to law colleges." },
            { name: "NIFT", info: "National Institute of Fashion Technology Entrance Exam for fashion courses." }
        ],
        "bsc": [
            { name: "CSIR NET", info: "Council of Scientific & Industrial Research NET for PhD and lecturership." },
            { name: "IIT JAM", info: "Joint Admission Test for Masters for admission to M.Sc." },
            { name: "UPSC CSE", info: "Union Public Service Commission Civil Services Examination for administrative positions." },
            { name: "SSC CGL", info: "Staff Selection Commission Combined Graduate Level Exam for various government jobs." }
        ],
        "msc": [
            { name: "GATE", info: "Graduate Aptitude Test in Engineering for higher studies and jobs." },
            { name: "UGC NET", info: "University Grants Commission National Eligibility Test for lecturership." },
            { name: "ICAR JRF", info: "Indian Council of Agricultural Research Junior Research Fellowship for PhD programs." },
            { name: "NABARD Grade A", info: "National Bank for Agriculture and Rural Development exam for Grade A officers." }
        ],
        "btech": [
            { name: "GATE", info: "Graduate Aptitude Test in Engineering for higher studies and jobs." },
            { name: "IES", info: "Indian Engineering Services for a career in public sector engineering roles." },
            { name: "CAT", info: "Common Admission Test for admission to management programs (MBA)." },
            { name: "CDS", info: "Combined Defence Services Exam for recruitment into the Indian Military, Navy, and Air Force." }
        ],
        "mtech": [
            { name: "PhD Entrance Exam", info: "Entrance exams for pursuing PhD in various disciplines." },
            { name: "ISRO Scientist Exam", info: "Recruitment exam for scientist positions at Indian Space Research Organisation." },
            { name: "DRDO Scientist B", info: "Defence Research and Development Organisation Scientist Entry exam." },
            { name: "UGC NET", info: "University Grants Commission National Eligibility Test for lecturership and research." }
        ],
        "phd": [
            { name: "Postdoctoral Fellowship", info: "Various postdoctoral fellowship exams in different subjects." },
            { name: "Fulbright Fellowship", info: "Prestigious fellowship for academic and research opportunities in the USA." },
            { name: "ICMR JRF", info: "Indian Council of Medical Research Junior Research Fellowship for medical research." },
            { name: "DAAD Research Grant", info: "German Academic Exchange Service grant for postdoctoral research in Germany." }
        ]
    };

    if (exams[qualification]) {
        exams[qualification].forEach(exam => {
            const examElement = document.createElement("div");
            examElement.classList.add("exam-item", "mt-2", "p-2", "border", "rounded");
            examElement.innerHTML = `<strong>${exam.name}</strong>: <a href="#" onclick="openExamInfo('${exam.info}')">Learn More</a>`;
            examList.appendChild(examElement);
        });
    }
}

function openExamInfo(info) {
    const newTab = window.open();
    newTab.document.write(`<html><head><title>Exam Information</title></head><body><h2>Exam Information</h2><p>${info}</p></body></html>`);
    newTab.document.close();
}
