var myName = 'Michelle Glass';
var myField = 'Boot-camp Student and Intern for SHS';
var myDescription = 'An artistic, excitable Disney princess in disguise; trying to learn to code, with the help of her companion, the coding corgi.';
var interests = ['Painting', 'Sewing -mostly quilting', 'Crafts', 'Disney', 'Corgis', 'Cats', 'Animals in general', 'Coding', 'Cooking'];
var jobArray = [
    {
        job: 'A book store',
        title: 'Tracker',
        where: 'The place of a million books',
        whatDo: 'Finder of "a book" '
    },
    {
        job: 'A media and electronics store',
        title: 'Shopkeeper',
        where: 'The place where the buys are best',
        whatDo: 'Pricer of DvDs and CDs'
    },
    {
        job: 'A comics and card game store',
        title: 'Archon',
        where: 'the place where the destruction started',
        whatDo: 'Wrangler of the MTG and YGO! players, seller of comics, and reciever of all items'
    },
    {
        job: 'An auto parts store',
        title: 'Parts Courier',
        where: 'The luckiest auto parts store',
        whatDo: 'Conveyer of parts to the ones who fix'
    },
    {
        job: 'A community center',
        title: 'Manager of Messes',
        where: 'The center of recreation',
        whatDo: 'Teacher of crafts and maker of messes'
    },
];
var skillArray = [
    { skill: 'Teaching', coolness: true },
    { skill: 'Quilting' },
    { skill: 'Shen Lung Kung Fu', coolness: true },
    { skill: 'High Animal Kin' },
    { skill: 'Ran over 200,000 console logs in less than an hour', coolness: true },
    { skill: 'Painting' },
    { skill: 'Pinterest' },
    { skill: 'Member of Star Wars Cannon', coolness: true },
    { skill: 'Creativity' },
    { skill: 'Kitty wrangling', coolness: true },
    { skill: 'Walt level Disney Fan' },
    { skill: 'Maker of rainbows-in my hair', coolness: true },
    { skill: 'Leads a funkoPop army' },
    { skill: 'Finally beat this lab!', coolness: true }
];
function displayInts() {
    interests.forEach(function (interest) {
        console.log("*" + interest);
    });
}
function displayJob(title, where, whatDo) {
    console.log("*" + title + " at " + where + ": " + whatDo);
}
function checkSkill(skill, coolness) {
    !coolness ? console.log("*" + skill) : console.log("*BAM:" + skill);
}
console.log("Name: " + myName.toUpperCase());
console.log("Description: " + myDescription);
console.log("");
console.log("Interests:");
displayInts();
console.log("");
console.log("My Previous Experience");
jobArray.forEach(function (job) {
    displayJob(job.title, job.where, job.whatDo);
});
console.log("");
skillArray.forEach(function (entry) {
    checkSkill(entry.skill, entry.coolness);
});
