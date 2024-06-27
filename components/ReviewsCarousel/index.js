import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexOfCarousel: 0}

  onClickOfLeftArrow = () => {
    const {indexOfCarousel} = this.state
    if (indexOfCarousel > 0) {
      this.setState(prevState => ({
        indexOfCarousel: prevState.indexOfCarousel - 1,
      }))
    }
  }

  onClickOfRightArrow = () => {
    const {indexOfCarousel} = this.state
    const {reviewsList} = this.props
    if (indexOfCarousel < reviewsList.length - 1) {
      this.setState(prevState => ({
        indexOfCarousel: prevState.indexOfCarousel + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexOfCarousel} = this.state

    const currentReview = reviewsList[indexOfCarousel]

    return (
      <div className="carousel-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickOfLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={currentReview.imgUrl} alt={currentReview.username} />
            <p className="username">{currentReview.username}</p>
            <p>{currentReview.companyName}</p>
            <p>{currentReview.description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickOfRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
