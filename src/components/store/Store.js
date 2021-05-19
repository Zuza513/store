import './Store.css';

function Store() {
    const items = [
        {
            title: 'Bike',
            describe: 'Super Bike',
            price: 20,
            photo: '/images/bike.jpg'
        },
        {
            title: 'Car',
            describe: 'Super Car',
            price: 10,
            photo: '/images/car.jpg'
        },
        {
            title: 'Coca Cola',
            describe: 'Super Cola',
            price: 5,
            photo: '/images/cocacola.jpg'
        },
        {
            title: 'Headphones',
            describe: 'Super Headphones',
            price: 34,
            photo: '/images/headphones.jpg'
        },
        {
            title: 'Speaker',
            describe: 'Super Speaker',
            price: 234,
            photo: '/images/speaker.jpg'
        },
        {
            title: 'T-shirt',
            describe: 'Super T-shirt',
            price: 30,
            photo: '/images/tshirt.jpg'
        },
        {
            title: 'Smartphone',
            describe: 'Super Smartphone',
            price: 400,
            photo: '/images/smartphone.jpg'
        },
        {
            title: 'Sunglasses',
            describe: 'Super Sunglasses',
            price: 15,
            photo: '/images/sunglasses.jpg'
        },
        {
            title: 'Watch',
            describe: 'Super Watch',
            price: 500,
            photo: '/images/watch.jpg'
        }
    ]

    const storeItems = items.map((item, idx) => (
        <div className="card" key={idx}>
            <img src={item.photo} className="image"/>
            <div className="textContainer">
                <span className="title">{item.title}</span>
                <span className="description">{item.describe}</span>
                <div className="addContainer">
                    <span className="price">{item.price}$</span>
                    <button className="add"><img src="/icons/plus.png" width="30px"/></button>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="container">
            <div className="cards">
                {storeItems}
            </div>
        </div>
    )
}

export default Store;