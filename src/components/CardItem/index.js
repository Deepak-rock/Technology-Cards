import './index.css'

const CardsListDetails = props => {
  const {cardsListItem} = props
  const {title, description, imgUrl, className} = cardsListItem
  const cardStyleClassName = `card-style ${className}`
  return (
    <li className={cardStyleClassName}>
      <div>
        <h2 className="title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="image-container">
          <img className="image" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardsListDetails
