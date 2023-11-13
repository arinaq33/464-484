// 464-----------------------------------------------
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//     p.addEventListener('click', function(){
//         let curr = parseInt(p.textContent);
//         p.textContent = curr + 1;
//     })
// 	parent.appendChild(p);
// }
// =================================================================
// 465_1 ---------------------------------------------------
// let ul = document.getElementById('elem');
// let arr = ['dhdh', 'ergh', 'ergh'];
// arr.forEach(function(item){
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });
// 465_2 ----------------------------------------------------
// let ul = document.getElementById('elem');
// let arr = ['dhdh', 'ergh', 'ergh'];
// arr.forEach(function(item){
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);

//     li.addEventListener('click', function(){
//        console.log(this.textContent);
//     })
// });
// 465_3 ------------------------------------------------
// let ul = document.getElementById('elem');
// let arr = ['dhdh', 'ergh', 'ergh'];
// arr.forEach(function(item){
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);

//     li.addEventListener('click', function(){
//         li.textContent += '!';
//     })
// });
// 465_4 ----------------------------------------------------
// let ul = document.getElementById('elem');
// let arr = ['dhdh', 'ergh', 'ergh'];
// arr.forEach(function(item){
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);

//     let clicked = false;

//     li.addEventListener('click', function(){
//         if (!clicked){
//             li.textContent += '!';
//             clicked = true;
//         }
//     })
// });
// =======================================================================
// 466 --------------------------------
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let j = 0; j < 5; j++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 466_2 ------------------------------------
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let j = 0; j < 5; j++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 466_3 ----------------------------------------
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let j = 0; j < 5; j++) {
// 		let td = document.createElement('td');
//         td.textContent = 'x';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 466_4 ------------------------------------------------
// function generate() {
//     let width = document.getElementById('widthInput').value;
//     let height = document.getElementById('heightInput').value;
//     let tablecontainer = document.getElementById('tablecontainer');
//     tablecontainer.innerHTML = '';
//     let table = document.createElement('table');
//     for (let i = 0; i < height; i++) {
//       let row = document.createElement('tr');
  
//       for (let j = 0; j < width; j++) {
//         let cell = document.createElement('td');
//         cell.textContent = 'x'; 
//         row.appendChild(cell);
//       }
  
//       table.appendChild(row);
//     }
//     tablecontainer.appendChild(table);
//   }
// =======================================================
// 467_1
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k; 
// 		k++; 
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 467_2 -------------------------------------------
// let table = document.querySelector('#table');
// let k = 2;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k; 
// 		k += 2; 
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 468_1 ============================================
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 468_2 ---------------------------
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');

// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem * elem;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// 469_1 =========================================
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// 469_2---------------------
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
//     td2.addEventListener('click', function() {
//         user.age++;
//         td2.textContent = user.age;
//     });
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// 469_3--------------------------
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
//     td2.addEventListener('click', function() {
//         user.age++;
//         td2.textContent = user.age;
//     });
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
//     td3.addEventListener('click', function() {
//         user.salary *= 1.1;
//          td3.textContent = user.salary;
//      });
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// 470_1 ========================================================
// let table = document.querySelector('#table');
// let addRowButton = document.querySelector('#addButton');

// addButton.addEventListener ('click', function() {
//   let tr = document.createElement('tr');

// for (let i = 1; i <= 3; i++) {
//   let td = document.createElement('td');
//   td.textContent = 'x';
//   tr.appendChild(td);
// }

// table.appendChild(tr);
// });
// 470_2--------------------------------------------------
// let table = document.querySelector('#table');
// let addButton = document.querySelector('#addButton');
// addButton.addEventListener('click', function() {
//   let rows = table.getElementsByTagName('tr');
//   let newRow = document.createElement('tr');
//   for (let i = 0; i < rows[0].children.length; i++) {
//     let newCell = document.createElement('td');
//     newRow.appendChild(newCell);
//   }
//   table.appendChild(newRow);
//   let cells = table.getElementsByTagName('td');
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].style.width = '50px';
//     cells[i].style.height = '50px';
//     cells[i].style.border = '1px solid black';
//   }
// });
// 471 ====================================================
// let table = document.querySelector('#table');
// let plusButton = document.querySelector('#plus');
// plusButton.addEventListener('click', function() {
//     let cells = table.getElementsByTagName('td');
    
//     for (let i = 0; i < cells.length; i++) {
//       let number = cells[i].textContent;
//       cells[i].textContent = number * 2;
//     }
//   });
// 472 ======================================================
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     let li = document.createElement('li');
//     li.textContent = parent.children.length + 1;
    
//     li.addEventListener('click', function() {
//       this.remove();
//     });
//     parent.appendChild(li);
// });
// parent.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//       event.target.remove();
//     }
//   });
// 474_1 =========================================================
// let elems = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'удалить';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }
// 474_2 ---------------------------------------------
// 477_1 ============================================
// let elems = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }
// 477_2------------------------------------
// let elems = document.querySelectorAll('#table td');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }
// 478_1 =======================================================
// let elems = document.querySelectorAll('#parent span');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;	
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// }
// let elemss = document.querySelectorAll('#parent p');
// for (let elem of elemss) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'удалить';
// 	elem.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }
// 479_1 =================================================================
// let elem = document.querySelectorAll('p')
// for (let p of elem) {
//   p.innerHTML = '<span>' + p.innerHTML + '</span>';
//   let remove = document.createElement('a');
//   remove.href = '#';
//   remove.textContent = 'зачеркнуть';
//   p.appendChild(remove)
//   let spans = document.querySelectorAll('span')
//   for (let span of spans) {
//     remove.addEventListener('click', function() {
//       span.style.textDecoration = 'line-through';
//     })
//   }
// }
// 482 ---------------------------------------------
// let tds = document.querySelectorAll('#parent li');

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
// }
// 484_1 ========================================
// let arr = [1, 2, 3];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// 484_2----------------------------------------------------
// let arr = [1, 2, 3];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// arr.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;  
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('blur', function () {
//             li.textContent = this.value;
//             li.addEventListener('click', func)  
//         })
//         li.removeEventListener('click', func)   
//     })
// })
// 484_3 ------------------------------------------------------------
// let arr = [1, 2, 3];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// arr.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;  
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('blur', function () {
//             li.textContent = this.value;
//             li.addEventListener('click', func)  
//         })
//         li.removeEventListener('click', func)   
//     })
// })
// let button = document.createElement('input');
// button.type = 'button'
// button.value = 'добавить в список';
// div.appendChild(button);
// button.addEventListener('click', function () {
//     let li = document.createElement('li');
//     li.textContent = "новый элемент";
//     ul.append(li);
// })
// 484_4 ------------------------------------------------------------
// let arr = [1, 2, 3];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// arr.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;  
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('blur', function () {
//             li.textContent = this.value;
//             li.addEventListener('click', func)  
//         })
//         li.removeEventListener('click', func)   
//     })
// })
// let button = document.createElement('input');
// button.type = 'button'
// button.value = 'добавить в список';
// div.appendChild(button);
// button.addEventListener('click', function () {
//     let li = document.createElement('li');
//     li.textContent = "новый элемент";
//     ul.append(li);
// })
// let elemss = document.querySelectorAll('.spisok li');
// for (let elem of elemss) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'удалить';
// 	elem.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }
// 484_5 ----------------------------------------
// let elem = document.querySelectorAll('.spisok li')
// for (let li of elem) {
//   li.innerHTML = '<span>' + li.innerHTML + '</span>';
//   let remove = document.createElement('a');
//   remove.href = '#';
//   remove.textContent = 'зачеркнуть';
//   p.appendChild(remove)
//   let spans = document.querySelectorAll('span')
//   for (let span of spans) {
//     remove.addEventListener('click', function() {
//       span.style.textDecoration = 'line-through';
//     })
//   }
// }
// 484_6 -----------------------------------------------
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = user.name;
//     tr.appendChild(td1);
//     let td2 = document.createElement('td');
//     td2.textContent = user.age;
//     tr.appendChild(td2);
//     let td3 = document.createElement('td');
//     td3.textContent = user.salary;
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
// 484_7----------------------------------
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = user.name;
//     tr.appendChild(td1);
//     let td2 = document.createElement('td');
//     td2.textContent = user.age;
//     tr.appendChild(td2);
//     let td3 = document.createElement('td');
//     td3.textContent = user.salary;
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
// let elems = document.querySelectorAll('#table td');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;	
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// }
// 484_8 -----------------------------------------
// let td4 = document.createElement('td');
//   let deleteLink = document.createElement('a');
//   deleteLink.href = '#';
//   deleteLink.textContent = 'удалить';
  
//   deleteLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     let row = this.value;
//     row.removeChild(row);
//   });
// 484_9 --------------------------------------------------
// let employees = [
//     { name: 'employee1', age: 30, salary: 400 },
//     { name: 'employee2', age: 31, salary: 500 },
//     { name: 'employee3', age: 32, salary: 600 },
// ];
// let table = document.getElementById('table');
// function render() {
//     table.innerHTML = '';
//     for (let user of employees) {
//         let tr = document.createElement('tr');
//         for (let prop in user) {
//             let td = document.createElement('td');
//             td.textContent = user[prop];
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }
// function addEmployee() {
//     let nameInput = document.getElementById('nameInput');
//     let ageInput = document.getElementById('ageInput');
//     let salaryInput = document.getElementById('salaryInput');
//     let newEmployee = {
//         name: nameInput.value,
//         age: ageInput.value,
//         salary: salaryInput.value,
//     };
//     employees.push(newEmployee);
//     render();
//     nameInput.value = '';
//     ageInput.value = '';
//     salaryInput.value = '';
// }
// render();
// let nameInput = document.createElement('input');
// nameInput.placeholder = 'имя';
// nameInput.id = 'nameInput';
// let ageInput = document.createElement('input');
// ageInput.placeholder = 'возраст';
// ageInput.id = 'ageInput';
// let salaryInput = document.createElement('input');
// salaryInput.placeholder = 'зп';
// salaryInput.id = 'salaryInput';
// let addButton = document.createElement('button');
// addButton.textContent = 'добавить';
// addButton.addEventListener('click', addEmployee);
// document.body.appendChild(nameInput);
// document.body.appendChild(ageInput);
// document.body.appendChild(salaryInput);
// document.body.appendChild(addButton);
// 484_10 -----------------------------------------------
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// employees.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);});
// 484_11------------------------------------
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// employees.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);});
// li.addEventListener('click', function func() {
//     let input = document.createElement('input');
//     input.value = li.textContent;  
//     li.textContent = '';
//     li.appendChild(input);
//     input.addEventListener('blur', function () {
//         li.textContent = this.value;
//         li.addEventListener('click', func)  
//     })
//     li.removeEventListener('click', func)   
// })
// 484_12 ---------------------------------------
// let elemss = document.querySelectorAll('.spisok li');
// for (let elem of elemss) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'удалить';
// 	elem.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }
// 484_13 --------------------------------------------
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// employees.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);});
// 484_11------------------------------------
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let div = document.querySelector('.spisok');
// let ul = document.createElement('ul');
// div.append(ul);
// employees.forEach(function (elem) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     ul.append(li);});
// li.addEventListener('click', function func() {
//     let input = document.createElement('input');
//     input.value = li.textContent;  
//     li.textContent = '';
//     li.appendChild(input);
//     input.addEventListener('blur', function () {
//         li.textContent = this.value;
//         li.addEventListener('click', func)  
//     })
//     li.removeEventListener('click', func)   
// })
// function addEmployee() {
//     let nameInput = document.getElementById('nameInput');
//     let ageInput = document.getElementById('ageInput');
//     let salaryInput = document.getElementById('salaryInput');
//     let newEmployee = {
//         name: nameInput.value,
//         age: ageInput.value,
//         salary: salaryInput.value,
//     };
//     employees.push(newEmployee);
//     nameInput.value = '';
//     ageInput.value = '';
//     salaryInput.value = '';
// }
// let nameInput = document.createElement('input');
// nameInput.placeholder = 'имя';
// nameInput.id = 'nameInput';
// let ageInput = document.createElement('input');
// ageInput.placeholder = 'возраст';
// ageInput.id = 'ageInput';
// let salaryInput = document.createElement('input');
// salaryInput.placeholder = 'зп';
// salaryInput.id = 'salaryInput';
// let addButton = document.createElement('button');
// addButton.textContent = 'добавить';
// addButton.addEventListener('click', addEmployee);
// document.body.appendChild(nameInput);
// document.body.appendChild(ageInput);
// document.body.appendChild(salaryInput);
// document.body.appendChild(addButton);
