// 1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
// გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let PositiveNumbers = 0;
// let NegativeSum = 0;
// nums.map((number) => {
//   if (number > 0) {
//     PositiveNumbers++;
//   } else {
//     NegativeSum += number;
//   }
// });
// console.log([PositiveNumbers, NegativeSum]);

// 2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const MultiplieFilteredNumbers = Numbers.map((item) => item * 2).filter(
//   (item) => item % 3 === 0
// );
// console.log(MultiplieFilteredNumbers);

// 3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7

// const arr = [19, 5, 42, 2, 77];
// let sorted = arr.sort((a, b) => a - b);
// let First = sorted[0];
// let Second = sorted[1];
// let sum = (First += Second);
// console.log(sum);

// 4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// function getLargerNumbers(arr1, arr2) {
//   let arr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     arr.push(Math.max(arr1[i], arr2[i]));
//   }

//   return arr;
// }

// console.log(getLargerNumbers(arr1, arr2));

// 5) const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები:
// * Get an array of all names
// *  Get an array of all first names
// * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:
// {blue: 2, brown: 1, yellow: 1}
// როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.
// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// const NamesArray = characters.map((item) => item.name);
// console.log(NamesArray);

// const FirstNamesArray = characters.map((item) => item.name.split(" ")[0]);
// console.log(FirstNamesArray);

// const EyeColors = characters.reduce((tot, cur) => {
//   const color = cur.eye_color;
//   tot[color] = (tot[color] || 0) + 1;
//   return tot;
// }, {});

// console.log(EyeColors);

// 6) const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "Tenet", year: 2020, rating: 7.5 },
//   { title: "Dunkirk", year: 2017, rating: 7.9 },
// ];
// * გაფილტრეთ მარტო ისეთი ფილმები რომელთა რეიტინგიც არის 8ზე მეტი
// * ამოიღეთ მხოლოდ სახელები
// * დაალაგეთ ეს სახელები ანბანის მიხედვით

// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "Tenet", year: 2020, rating: 7.5 },
//   { title: "Dunkirk", year: 2017, rating: 7.9 },
// ];

// const FilterdByRating = movies.filter((item) => item.rating > 8);
// console.log(FilterdByRating);

// const NamesArr = movies.map((item) => item.title);
// console.log(NamesArr);

// const SortedNames = NamesArr.sort();
// console.log(SortedNames);

// 7) const students = [
//   { name: "Lia", scores: [90, 85, 100] },
//   { name: "Tom", scores: [70, 60, 75] },
//   { name: "Mia", scores: [88, 92, 95] },
// ];
// * გამოიყენეთ map და reduce მეთოდები და დაუმატეთ თითეულ ობიექტს average ფილდი შემდეგ გაფილტრეთ და დააბრუნეთ მხოლოდ 85ზე მეტი ვისაც აქვს საშუალო ქულა ეგ სტუდენდები.

// const students = [
//   { name: "Lia", scores: [90, 85, 100] },
//   { name: "Tom", scores: [70, 60, 75] },
//   { name: "Mia", scores: [88, 92, 95] },
// ];
// const NewStidents = students.map((student) => {
//   let Numbers = student.scores.length;
//   const sum = student.scores.reduce((tot, cur) => (tot += cur), 0);
//   const average = sum / Numbers;
//   return { ...students, average };
// });

// const FilteredStudents = NewStidents.filter((item) => item.average > 85);
// console.log(FilteredStudents);

// 8) const employees = {
//   alice: { department: "HR", active: true },
//   bob: { department: "Engineering", active: false },
//   charlie: { department: "Engineering", active: true },
// };
// * გადაუარეთ თითოეულ ობიექტს Object.entries მეთოდით, დაითვალეთ რამდენი აქტიური იუზერია თითოეულ დეპარტამენტში და დააბრუნეთ შემდეგი ობიექტი:
// { HR: 1, Engineering: 1 }

// const employees = {
//   alice: { department: "HR", active: true },
//   bob: { department: "Engineering", active: false },
//   charlie: { department: "Engineering", active: true },
// };

// const arr = Object.entries(employees).reduce((tot, [employee, info]) => {
//   if (info.active) {
//     const dep = info.department;
//     tot[dep] = (tot[dep] || 0) + 1;
//   }

//   return tot;
// }, {});

// console.log(arr);
