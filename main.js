'use strict';

const sortEl = document.querySelector('.js-sort');
const filterEl = document.querySelector('.js-filter');

const data = [
	{
        "squadnumber": 1,
        "lastname": "Grant",
        "firstname": "Lee",
        "position": "Goalkeeper",
        "nationality": "English"
    },
    {
        "squadnumber": 2,
        "lastname": "Christie",
        "firstname": "Cyrus",
        "position": "Defender",
        "nationality": "Irish"
    },
    {
        "squadnumber": 3,
        "lastname": "Forsyth",
        "firstname": "Craig",
        "position": "Defender",
        "nationality": "Scottish"
    },
    {
        "squadnumber": 4,
        "lastname": "Bryson",
        "firstname": "Craig",
        "position": "Midfielder",
        "nationality": "Scottish"
    },
    {
        "squadnumber": 5,
        "lastname": "Buxton",
        "firstname": "Jake",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "squadnumber": 6,
        "lastname": "Keogh",
        "firstname": "Richard",
        "position": "Defender",
        "nationality": "Irish"
    },
    {
        "squadnumber": 8,
        "lastname": "Hendrick",
        "firstname": "Jeff",
        "position": "Midfielder",
        "nationality": "Irish"
    },
    {
        "squadnumber": 9,
        "lastname": "Martin",
        "firstname": "Chris",
        "position": "Forward",
        "nationality": "Scottish"
    },
    {
        "squadnumber": 10,
        "lastname": "Bent",
        "firstname": "Darren",
        "position": "Forward",
        "nationality": "English"
    },
    {
        "squadnumber": 11,
        "lastname": "Russell",
        "firstname": "Johnny",
        "position": "Forward",
        "nationality": "Scottish"
    },
    {
        "squadnumber": 12,
        "lastname": "Baird",
        "firstname": "Chris",
        "position": "Defender",
        "nationality": "Northern Irish"
    },
    {
        "squadnumber": 14,
        "lastname": "Shackell",
        "firstname": "Jason",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "squadnumber": 15,
        "lastname": "Johnson",
        "firstname": "Bradley",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "squadnumber": 16,
        "lastname": "Pearce",
        "firstname": "Alex",
        "position": "Defender",
        "nationality": "Irish"
    },
    {
        "squadnumber": 17,
        "lastname": "Carson",
        "firstname": "Scott",
        "position": "Goalkeeper",
        "nationality": "English"
    },
    {
        "squadnumber": 18,
        "lastname": "Butterfield",
        "firstname": "Jacob",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "squadnumber": 19,
        "lastname": "Hughes",
        "firstname": "Will",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "squadnumber": 20,
        "lastname": "Camara",
        "firstname": "Abdoul",
        "position": "Forward",
        "nationality": "Guinean"
    },
    {
        "squadnumber": 21,
        "lastname": "Roos",
        "firstname": "Kelle",
        "position": "Goalkeeper",
        "nationality": "Dutch"
    },
    {
        "squadnumber": 22,
        "lastname": "Blackman",
        "firstname": "Nick",
        "position": "Forward",
        "nationality": "English"
    },
    {
        "squadnumber": 23,
        "lastname": "Ince",
        "firstname": "Tom",
        "position": "Forward",
        "nationality": "English"
    },
    {
        "squadnumber": 24,
        "lastname": "Weimann",
        "firstname": "Andreas",
        "position": "Forward",
        "nationality": "Austrian"
    },
    {
        "squadnumber": 26,
        "lastname": "Hanson",
        "firstname": "Jamie",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "squadnumber": 27,
        "lastname": "Calero",
        "firstname": "Ivan",
        "position": "Forward",
        "nationality": "Spanish"
    },
    {
        "squadnumber": 30,
        "lastname": "Ssewankambo",
        "firstname": "Isak",
        "position": "Defender",
        "nationality": "Swedish"
    },
    {
        "squadnumber": 31,
        "lastname": "Lowe",
        "firstname": "Max",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "squadnumber": 32,
        "lastname": "Shotton",
        "firstname": "Ryan",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "squadnumber": 34,
        "lastname": "Thorne",
        "firstname": "George",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "squadnumber": 35,
        "lastname": "Mitchell",
        "firstname": "Jonathan",
        "position": "Goalkeeper",
        "nationality": "English"
    },
    {
        "squadnumber": 37,
        "lastname": "Warnock",
        "firstname": "Stephen",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "squadnumber": 38,
        "lastname": "Bennett",
        "firstname": "Mason",
        "position": "Forward",
        "nationality": "English"
    }
];

const renderData = (dataToRender = data) => {
	console.table(dataToRender);
	const dataEl = document.querySelector('.js-data-body');
	dataEl.innerHTML = '';
	dataToRender.forEach(item => {
		const row = document.createElement('tr');
		for (var key in item) {
			if (key !== 'id') {
				const cell = document.createElement('td');
				cell.setAttribute('headers', key);
				cell.textContent = item[key];
				row.appendChild(cell);
			}
		}
		dataEl.appendChild(row);
	});
};

const sortValues = (sortBy, isDescending) => {

	const arr = [];
	for (let key in data) {
		arr.push(data[key]);
	}

	return arr.sort( (a, b) => {
		if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
			return a[sortBy] - b[sortBy];
		} else {
			return isDescending ? a[sortBy] < b[sortBy] : a[sortBy] > b[sortBy];
		}
	});

};

const filterValues = (filterBy, filterValue) => {
	if (filterValue === 'All') return;
	return data.filter(item => item[filterBy] === filterValue);
};

const doFilter = () => {
	if (!filterEl) return;
	const selected = filterEl.options[filterEl.selectedIndex];
	const filterBy = selected.value;
	const filterValue = selected.textContent;
	const filtered = filterValues(filterBy, filterValue);
	renderData(filtered);
};

const doSort = (sortByDefault, evt) => {
	if (!sortEl) return;
	sortByDefault = (sortByDefault === true);
	const defaultSort = sortEl.dataset.defaultSort;
	const selected = sortByDefault ? defaultSort : sortEl.options[sortEl.selectedIndex];
	const sortBy = sortByDefault ? defaultSort : selected.value;
	const direction = sortByDefault ? sortEl.querySelector(`[data-default-sort-direction]`) : selected.dataset.sortDirection;
	const isDescending = direction === 'descending';
	const sorted = sortValues(sortBy, isDescending);
	renderData(sorted);
};

const init = () => {
	doSort(true);
	sortEl.addEventListener('change', doSort);
	doFilter();
	filterEl.addEventListener('change', doFilter);
};

init();
