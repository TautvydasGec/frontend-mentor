const projects = [
	{
		name: 'four-card-feature-section-master',
	},
	{
		name: 'base-apparel-coming-soon-master',
	},
];

const list = document.getElementById('list');

projects.forEach(({name}, i) => {
    
    const listItem = document.createElement('li');
    
    let formatedName = formatName(name);

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${formatedName} img" />
            <p>${i + 1}. ${formatedName}</p>
		</a>
	`;
	list.appendChild(listItem);
});

function formatName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .slice(0, -1)
        .join(' ');
}