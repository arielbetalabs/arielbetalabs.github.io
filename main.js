var icons = fetch('./icons.json')
    .then((response) => response.json())
    .then((json) => loadIcons(json, 'classic'));

var icons_brands = fetch('./icons_brands.json')
    .then((response) => response.json())
    .then((json) => loadIcons(json, 'brands'));

function loadIcons(json, type) {
    json.icons = json.icons.sort((previous, next) => {
        if (previous.name < next.name) {
            return -1
        }
        if (previous.name > next.name) {
            return 1;
        }
        return 0;
    })
    const container = document.querySelector(`#icon-container-${type}`)
    json.icons.map(icon => {
        const card = document.createElement('div')
        const title = document.createElement('h6')
        const faIcon = document.createElement('i')
        title.innerText = icon.name
        card.classList.add('card', 'm-3', 'd-flex', 'flex-row')
        card.style.height = '55px'
        title.classList.add('card-title', 'text-wrap', 'my-auto')
        faIcon.classList.add(type == 'brands' ? `fab` : `fas`)
        faIcon.classList.add(`fa-${icon.name}`)
        faIcon.classList.add('my-auto', 'mx-2')
        card.append(faIcon)
        card.append(title)
        container.append(card)
    })
}
