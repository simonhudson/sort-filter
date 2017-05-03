'use strict';

const sortEl = document.querySelector('.js-sort');
const filterEl = document.querySelector('.js-filter');

const data = [
	{
		'id': 1,
		'lastname': 'Hughes',
		'firstname': 'Will',
		'age': 22,
		'position': 'Midfield'
	},
	{
		'id': 2,
		'lastname': 'Wright',
		'firstname': 'Mark',
		'age': 50,
		'position': 'Defence'
	},
	{
		'id': 3,
		'lastname': 'Saunders',
		'firstname': 'Dean',
		'age': 24,
		'position': 'Striker'
	},
	{
		'id': 4,
		'lastname': 'Eustace',
		'firstname': 'John',
		'age': 49,
		'position': 'Midfield'
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
		return isDescending ? ~~(a[sortBy] < b[sortBy]) : ~~(a[sortBy] > b[sortBy]);
	});
};

const doFilter = () => {
	if (!filterEl) return;
};

const doSort = (sortByDefault = false) => {
	if (!sortEl) return;
	console.log('doSort');
	const defaultSort = sortEl.dataset.defaultSort;
	const selected = sortByDefault ? defaultSort : sortEl.options[sortEl.selectedIndex].value;
	const direction = sortByDefault ? sortEl.querySelector(`[data-sort-direction]`) : selected.dataset.sortDirection;
	const isDescending = direction === 'descending';
	console.log(selected);
	const sorted = sortValues(selected.value, isDescending);
	console.table(sorted);
	renderData(sorted);
};

const init = () => {
	doSort(true);
	sortEl.addEventListener('change', doSort);
	doFilter();
	filterEl.addEventListener('change', doFilter);
};

init();
