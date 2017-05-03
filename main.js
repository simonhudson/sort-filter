'use strict';

const sortEl = document.querySelector('.js-sort');
const filterEl = document.querySelector('.js-filter');

const data = [
	{
        "id": 1,
        "squadnumber": 1,
        "lastname": "Grant",
        "firstname": "Lee",
        "position": "Goalkeeper",
        "nationality": "English"
    },
    {
        "id": 2,
        "squadnumber": 2,
        "lastname": "Christie",
        "firstname": "Cyrus",
        "position": "Defender",
        "nationality": "Irish"
    },
    {
        "id": 3,
        "squadnumber": 3,
        "lastname": "Forsyth",
        "firstname": "Craig",
        "position": "Defender",
        "nationality": "Scottish"
    },
    {
        "id": 4,
        "squadnumber": 4,
        "lastname": "Bryson",
        "firstname": "Craig",
        "position": "Midfielder",
        "nationality": "Scottish"
    },
    {
        "id": 5,
        "squadnumber": 5,
        "lastname": "Buxton",
        "firstname": "Jake",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "id": 6,
        "squadnumber": 6,
        "lastname": "Keogh",
        "firstname": "Richard",
        "position": "Defender",
        "nationality": "Irish"
    },
    {
        "id": 8,
        "squadnumber": 8,
        "lastname": "Hendrick",
        "firstname": "Jeff",
        "position": "Midfielder",
        "nationality": "Irish"
    },
    {
        "id": 9,
        "squadnumber": 9,
        "lastname": "Martin",
        "firstname": "Chris",
        "position": "Forward",
        "nationality": "Scottish"
    },
    {
        "id": 10,
        "squadnumber": 10,
        "lastname": "Bent",
        "firstname": "Darren",
        "position": "Forward",
        "nationality": "English"
    },
    {
        "id": 11,
        "squadnumber": 11,
        "lastname": "Russell",
        "firstname": "Johnny",
        "position": "Forward",
        "nationality": "Scottish"
    },
    {
        "id": 12,
        "squadnumber": 12,
        "lastname": "Baird",
        "firstname": "Chris",
        "position": "Defender",
        "nationality": "Northern Irish"
    },
    {
        "id": 14,
        "squadnumber": 14,
        "lastname": "Shackell",
        "firstname": "Jason",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "id": 15,
        "squadnumber": 15,
        "lastname": "Johnson",
        "firstname": "Bradley",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "id": 16,
        "squadnumber": 16,
        "lastname": "Pearce",
        "firstname": "Alex",
        "position": "Defender",
        "nationality": "Irish"
    },
    {
        "id": 17,
        "squadnumber": 17,
        "lastname": "Carson",
        "firstname": "Scott",
        "position": "Goalkeeper",
        "nationality": "English"
    },
    {
        "id": 18,
        "squadnumber": 18,
        "lastname": "Butterfield",
        "firstname": "Jacob",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "id": 19,
        "squadnumber": 19,
        "lastname": "Hughes",
        "firstname": "Will",
        "position": "Midfielder",
        "nationality": "Northern Irish"
    },
    {
        "id": 20,
        "squadnumber": 20,
        "lastname": "Camara",
        "firstname": "Abdoul",
        "position": "Forward",
        "nationality": "Guinean"
    },
    {
        "id": 21,
        "squadnumber": 21,
        "lastname": "Roos",
        "firstname": "Kelle",
        "position": "Goalkeeper",
        "nationality": "Dutch"
    },
    {
        "id": 22,
        "squadnumber": 22,
        "lastname": "Blackman",
        "firstname": "Nick",
        "position": "Forward",
        "nationality": "English"
    },
    {
        "id": 23,
        "squadnumber": 23,
        "lastname": "Ince",
        "firstname": "Tom",
        "position": "Forward",
        "nationality": "English"
    },
    {
        "id": 24,
        "squadnumber": 24,
        "lastname": "Weimann",
        "firstname": "Andreas",
        "position": "Forward",
        "nationality": "Austrian"
    },
    {
        "id": 26,
        "squadnumber": 26,
        "lastname": "Hanson",
        "firstname": "Jamie",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "id": 27,
        "squadnumber": 27,
        "lastname": "Calero",
        "firstname": "Ivan",
        "position": "Forward",
        "nationality": "Spanish"
    },
    {
        "id": 30,
        "squadnumber": 30,
        "lastname": "Ssewankambo",
        "firstname": "Isak",
        "position": "Defender",
        "nationality": "Swedish"
    },
    {
        "id": 31,
        "squadnumber": 31,
        "lastname": "Lowe",
        "firstname": "Max",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "id": 32,
        "squadnumber": 32,
        "lastname": "Shotton",
        "firstname": "Ryan",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "id": 34,
        "squadnumber": 34,
        "lastname": "Thorne",
        "firstname": "George",
        "position": "Midfielder",
        "nationality": "English"
    },
    {
        "id": 35,
        "squadnumber": 35,
        "lastname": "Mitchell",
        "firstname": "Jonathan",
        "position": "Goalkeeper",
        "nationality": "English"
    },
    {
        "id": 37,
        "squadnumber": 37,
        "lastname": "Warnock",
        "firstname": "Stephen",
        "position": "Defender",
        "nationality": "English"
    },
    {
        "id": 38,
        "squadnumber": 38,
        "lastname": "Bennett",
        "firstname": "Mason",
        "position": "Forward",
        "nationality": "English"
    }
];

const renderData = (dataToRender = data) => {
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
	return data.sort(function(a, b) {
		return isDescending ? (a[sortBy] < b[sortBy]) : (a[sortBy] > b[sortBy]);
	});
};

const doFilter = () => {
	if (!filterEl) return;
};

const doSort = (sortByDefault, evt) => {
	if (!sortEl) return;
	sortByDefault = (sortByDefault === true);
	const defaultSort = sortEl.dataset.defaultSort;
	const selected = sortByDefault ? defaultSort : sortEl.options[sortEl.selectedIndex];
	const sortBy = sortByDefault ? defaultSort : selected.value;
	console.log(`sortBy: ${sortBy}`);
	const direction = sortByDefault ? sortEl.querySelector(`[data-sort-direction]`) : selected.dataset.sortDirection;
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
