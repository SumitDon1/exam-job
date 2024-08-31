// JavaScript to Fetch and Display Jobs Based on Qualification
function fetchJobs() {
    const qualification = document.getElementById("job-qualification").value;
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = ""; // Clear previous results

    if (!qualification) {
        return; // Exit if no qualification is selected
    }

    const jobs = {
        "10th": [
            { name: "Data Entry Operator", info: "Basic data entry jobs in government and private sectors." },
            { name: "Railway Group D", info: "Entry-level jobs in Indian Railways." },
            { name: "Police Constable", info: "State police recruitment exams for constable posts." },
            { name: "Peon", info: "Support staff roles in various government departments." },
            { name: "Home Guard", info: "Recruitment for home guard positions in state police forces." }
        ],
        "12th": [
            { name: "Police Constable", info: "State police recruitment exams for constable posts." },
            { name: "Bank Clerk", info: "Bank Clerk exam for various public sector banks." },
            { name: "SSC CHSL", info: "Combined Higher Secondary Level Exam for various clerical positions." },
            { name: "Railway Ticket Collector", info: "Recruitment for ticket collectors in Indian Railways." },
            { name: "Defence Jobs", info: "Various positions in the Indian Army, Navy, and Air Force for 12th pass candidates." }
        ],
        "bsc": [
            { name: "Lab Assistant", info: "Jobs for lab assistants in educational and research institutions." },
            { name: "Teaching Assistant", info: "Assistant teacher positions in schools and colleges." },
            { name: "Bank Probationary Officer", info: "Bank PO exams for public sector banks." },
            { name: "SSC CGL", info: "Combined Graduate Level Exam for government job positions." },
            { name: "Scientific Assistant", info: "Recruitment for scientific assistants in government labs." }
        ],
        "msc": [
            { name: "Research Associate", info: "Research jobs in universities and research organizations." },
            { name: "Scientist B", info: "Entry-level scientist positions in organizations like DRDO and ISRO." },
            { name: "Data Scientist", info: "Data scientist positions in IT and analytics firms." },
            { name: "Lecturer", info: "Lecturer positions in colleges and universities." },
            { name: "Government Analyst", info: "Analyst roles in government departments and agencies." }
        ],
        "btech": [
            { name: "Software Developer", info: "Jobs for software developers in IT companies." },
            { name: "Junior Engineer", info: "Engineering positions in public sector organizations." },
            { name: "Civil Services (UPSC)", info: "Civil Services Examination for various administrative roles." },
            { name: "Graduate Trainee Engineer", info: "Graduate trainee roles in private and public sectors." },
            { name: "Network Engineer", info: "Jobs for network engineers in telecommunications companies." }
        ],
        "mtech": [
            { name: "Senior Engineer", info: "Advanced engineering roles in private and public sectors." },
            { name: "Technical Consultant", info: "Consulting roles in technology firms." },
            { name: "Project Manager", info: "Project management roles in IT and engineering firms." },
            { name: "Research Scientist", info: "Research scientist positions in organizations like ISRO and BARC." },
            { name: "Engineering Professor", info: "Teaching positions in engineering colleges." }
        ],
        "phd": [
            { name: "Postdoctoral Researcher", info: "Postdoctoral positions in academia and research institutes." },
            { name: "Assistant Professor", info: "Teaching positions in universities and colleges." },
            { name: "Chief Scientist", info: "Senior scientific roles in government and private research organizations." },
            { name: "Research Director", info: "Director roles in research departments of companies and institutions." },
            { name: "Policy Analyst", info: "Policy research and advisory roles in government and NGOs." }
        ]
    };

    if (jobs[qualification]) {
        jobs[qualification].forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.classList.add("job-item", "mt-2", "p-2", "border", "rounded");
            jobElement.innerHTML = `<strong>${job.name}</strong>: <a href="#" onclick="openJobInfo('${job.info}')">Learn More</a>`;
            jobList.appendChild(jobElement);
        });
    }
}

// Function to Display Job Info in a New Tab
function openJobInfo(info) {
    const newTab = window.open();
    newTab.document.write(`<html><head><title>Job Information</title></head><body><h2>Job Information</h2><p>${info}</p></body></html>`);
    newTab.document.close();
}
