let dataset = [
    {
        title: 'Article 1',
        id: 1
    },
    {
        title: 'Article 2',
        id: 2
    },
    {
        title: 'Article 3',
        id: 3
    },
    {
        title: 'Article 4',
        id: 4
    }
]

function loadData(){
    let template = document.getElementById('template');
    dataset.forEach(function(item){
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = template.innerHTML.replace('{{title}}', item.title);
        document.getElementById('items').appendChild(div);
    })
}
