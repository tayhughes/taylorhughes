const summaryURLPath = '../texts/summary.json';
const eduHistURLPath = '../texts/education.json';
const skillsListURLPath = '../texts/skills.json';
const jobHistURLPath = '../texts/jobs.json';
const studyAbroadHistURLPath = '../texts/study_abroad.json';

const ABROAD = 'abroad';
const SKILL = 'skill';
const SUMMARY = 'summary';
const EDU = 'edu';
const JOB = 'job';

const mainTag = document.querySelector('main');

// This function will create a "div" that will contain a "h2" heading.
// The div will have a "class: div-classAttribute" set
// the h2 will have a "class: h2-classAttribute" set
const addResumeSection = (headingTitle, classAttr) => {
    let newSectionContainer = document.createElement("div");
    newSectionContainer.setAttribute("class",`div-${classAttr}`);

    let newSectionHeading = document.createElement("h2");
    newSectionHeading.setAttribute("class", `h2-${classAttr}`);
    newSectionHeading.setAttribute("id", `h2-${classAttr}`);
    newSectionHeading.textContent = headingTitle;

    mainTag.append(newSectionHeading);
    mainTag.append(newSectionContainer);
}

const addSummaryToDOM = (summaryStatement, classAttr) => {
    let grabSummarySection = document.querySelector(`.div-${classAttr}`);
    let newSummaryCard = document.createElement("div");
    newSummaryCard.setAttribute("class", `summary-module ${classAttr}-card`)
    let givenStatement = document.createElement("p");
    givenStatement.setAttribute("class", "summary-statement");

    givenStatement.textContent = `${summaryStatement.summary}`;

    newSummaryCard.append(givenStatement);
    grabSummarySection.append(newSummaryCard);
}

const addSchoolToDOM = (schoolInfo, classAttr, indx) => {
    let grabSchoolSection = document.querySelector(`.div-${classAttr}`);
    
    let newSchoolCard = document.createElement("div");
    newSchoolCard.setAttribute("class",`school-module ${classAttr}-${indx}`);
    let schoolName = document.createElement('h3');
    schoolName.setAttribute("class",`h3-${classAttr}`);
    let startEndDate = document.createElement("p");
    startEndDate.setAttribute("class", `school-module-date`);
    let addressLine = document.createElement("p");
    addressLine.setAttribute("class", `school-module-address-line`);
    let cityStateZip = document.createElement("p");
    cityStateZip.setAttribute("class", `school-module-zip`);
    let degreeDescriptionHeading = document.createElement("h3");
    degreeDescriptionHeading.setAttribute("class", `school-module-degree-heading`);
    let degreeDescript = document.createElement("p");
    degreeDescript.setAttribute("class", `school-module-degree-description`);
    let gpaInfo = document.createElement("h3");
    gpaInfo.setAttribute("class", `school-module-gpa`);

    schoolName.textContent = `${schoolInfo.school} (${schoolInfo.school_acronym})`;
    startEndDate.textContent = `${schoolInfo.start_month} ${schoolInfo.start_year} - ${schoolInfo.end_month} ${schoolInfo.end_year}`;
    addressLine.textContent = schoolInfo.address_line;
    cityStateZip.textContent = `${schoolInfo.city}, ${schoolInfo.state} ${schoolInfo.zipcode}`;
    degreeDescriptionHeading.textContent = "Degree:";
    degreeDescript.textContent = schoolInfo.major_descript;
    gpaInfo.textContent = `GPA: ${schoolInfo.gpa}`;

    newSchoolCard.append(schoolName);
    newSchoolCard.append(startEndDate);
    newSchoolCard.append(addressLine);
    newSchoolCard.append(cityStateZip);
    newSchoolCard.append(degreeDescriptionHeading);
    newSchoolCard.append(degreeDescript);
    newSchoolCard.append(gpaInfo);

    grabSchoolSection.append(newSchoolCard);    
}

const addSkillsToDOM = (listedSkills, classAttr, indx) => {
    let grabSkillsSection = document.querySelector(`.div-${classAttr}`);

    let newSkillCard = document.createElement("div");
    newSkillCard.setAttribute("class", `skills-module ${classAttr}-card`);
    let skillStatement = document.createElement("p");
    skillStatement.setAttribute("class", `skills-para ${classAttr}-indx`);

    skillStatement.textContent = `${listedSkills[indx].skill_statement}`;

    newSkillCard.append(skillStatement);

    grabSkillsSection.append(newSkillCard);
}
 
// 'Job Cards' will have "class: job-module `classAttr-indx`"
const addJobToDOM = (jobInfo, classAttr, indx, finalElement) => {
    let grabJobSection = document.querySelector(`.div-${classAttr}`);

    let newJobCard = document.createElement("div");
    newJobCard.setAttribute("class",`job-module ${classAttr}-${indx}`);
    let companyName = document.createElement("h3");
    companyName.setAttribute("class",`job-module-company-name`);
    let startEndDate = document.createElement("p");
    startEndDate.setAttribute("class", `job-module-date`);
    let addressLine = document.createElement("p");
    addressLine.setAttribute("class", "job-module-address-line");
    let cityStateZip = document.createElement("p");
    cityStateZip.setAttribute("class", "job-module-zip");
    let positionHeading = document.createElement("h3");
    positionHeading.setAttribute("class", "job-module-position-heading");
    let positionTitle = document.createElement("p");
    positionTitle.setAttribute("class", "job-module-position-title");
    let jobDescriptionHeading = document.createElement("h3");
    jobDescriptionHeading.setAttribute("class", "job-module-descript-heading");
    let jobDescript = document.createElement("p");
    jobDescript.setAttribute("class", "job-module-description");

    companyName.textContent = jobInfo.company;
    startEndDate.textContent = `${jobInfo.start_month} ${jobInfo.start_year} - ${jobInfo.end_month} ${jobInfo.end_year}`;
    addressLine.textContent = jobInfo.address_line;
    cityStateZip.textContent = `${jobInfo.city}, ${jobInfo.state} ${jobInfo.zipcode}`;
    positionHeading.textContent = "Position:";
    positionTitle.textContent = jobInfo.position;
    jobDescriptionHeading.textContent = "Description:";
    jobDescript.textContent = jobInfo.description;

    newJobCard.append(companyName);
    newJobCard.append(startEndDate);
    newJobCard.append(addressLine);
    newJobCard.append(cityStateZip);
    newJobCard.append(positionHeading);
    newJobCard.append(positionTitle);
    newJobCard.append(jobDescriptionHeading);
    newJobCard.append(jobDescript);

    grabJobSection.append(newJobCard);
}

const addStudyAbroadToDOM = (experienceInfo, classAttr) => {
    let grabStudyAbroadSection = document.querySelector(`.div-${classAttr}`);

    let newStudyAbroadCard = document.createElement("div");
    newStudyAbroadCard.setAttribute("class", "study-abroad-module");
    let programName = document.createElement("h3");
    programName.setAttribute("class", "study-abroad-program-name");
    let programDescript = document.createElement("p");
    programDescript.setAttribute("class", "study-abroad-descript");

    programName.textContent = `${experienceInfo.program} (${experienceInfo.program_acronym})`;
    programDescript.textContent = `${experienceInfo.description}`;

    newStudyAbroadCard.append(programName);
    newStudyAbroadCard.append(programDescript);

    grabStudyAbroadSection.append(newStudyAbroadCard);
}

// either type SUMMARY or ABROAD or SKILL or EDU or JOB
const fetchInfoForDOM = (reqSummary, classAttr, fetchType) => {
    fetch(reqSummary)
    .then((response) => response.json())
    .then((data) => {
        if(fetchType === 'summary'){
            addSummaryToDOM(data[0], classAttr);
        }
        else if(fetchType === 'abroad'){
            addStudyAbroadToDOM(data[0], classAttr);
        }
        else if(fetchType === 'skill'){
            for(let i = 0; i < data.length; i++){
                addSkillsToDOM(data, classAttr, i);
            }
        }
        else if(fetchType === 'edu'){
            for(let element = 0; element < data.length; element++){
                addSchoolToDOM(data[element], classAttr, element);
            }
        }
        else if(fetchType === 'job'){
            for(let element = 0; element < data.length; element++){
                addJobToDOM(data[element], classAttr);
            }
        }
        else{
            console.error("There is issue with fetchType");
        }
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        // console.log("That is the end of the fetch work.");
    })
}

addResumeSection("Summary", "summary");
fetchInfoForDOM(summaryURLPath, "summary", SUMMARY);

addResumeSection("Education Background", "edu-hist");
fetchInfoForDOM(eduHistURLPath,"edu-hist", EDU);


addResumeSection("Skills", "skill-statements");
fetchInfoForDOM(skillsListURLPath, "skill-statements", SKILL);

addResumeSection("Job History","job-hist");
fetchInfoForDOM(jobHistURLPath, "job-hist", JOB);

addResumeSection("Study Abroad Experience", "study-abroad")
fetchInfoForDOM(studyAbroadHistURLPath, "study-abroad", ABROAD);

const smallNavToggle = document.querySelector('#navbar-toggler');
// const theSmallHeaderElement = document.querySelector('#small-screen-header nav');
const theSmallNavElement = document.querySelector('#small-nav-bar');


const toggleCollapser = () => {
    const lengthOfArr = theSmallNavElement.getAttribute("class");
    // if uncollapsed, let's collapse it by removing class="uncollapsed-block"
    // and adding class="collapsed-block"
    if(lengthOfArr.includes("uncollapsed-block")){ // note "un..." evaluated first
        theSmallNavElement.classList.remove("uncollapsed-block");
        theSmallNavElement.classList.add("collapsed-block");
    }
    else if(lengthOfArr.includes("collapsed-block")){
        theSmallNavElement.classList.remove("collapsed-block");
        theSmallNavElement.classList.add("uncollapsed-block");
    }
    else{
        console.log("error");
    }
};

smallNavToggle.addEventListener('click', toggleCollapser);

const getItemList = document.querySelectorAll('.sm-nav-list-item a');

for(let i = 0; i < getItemList.length; i++){
    getItemList[i].addEventListener('click', toggleCollapser);
}