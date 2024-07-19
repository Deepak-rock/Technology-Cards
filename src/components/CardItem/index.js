import './index.js'

const CardsListDetails = props => {
  const {cardsListItem} = props
  const {title, description, imgUrl, className} = cardsListItem
  const cardStyleClassName = `card-style ${className}`
  return (
    <div className={cardStyleClassName}>
      <div>
        <h2 className="title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <img className="image" src={imgUrl} />
    </div>
  )
}

export default CardsListDetails
