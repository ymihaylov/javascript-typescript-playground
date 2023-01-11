const MyBio = ['XYZ','abc','pqr', "last", "last_of_last", "really_last"];

// === Legacy array case


// let fname= MyBio[0];
// let prof= MyBio[1];
// let passion= MyBio[2];

// console.log(fname);
// console.log(prof);
// console.log(passion);


// === Destructing case
// let [fname,prof,passion, ...rest]= MyBio;
// let [fname,prof,passion, ...{pop, push}]= MyBio;
// console.log(fname);
// console.log(prof);
// console.log(passion);


// === Object destructing
const myBioData = {
	myFname: 'XYZ',
	myLname: 'PQR',
	myAge: 18,
};

// === Legacy style
// let myFname = myBioData.myFname;
// let age = myBioData.myAge;

// console.log(myFname);
// console.log(age);

// === Destruction style
// let {myFname, myLname, myAge, myDegree="MCA"}=myBioData;

// console.log(myDegree);
