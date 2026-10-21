import { useState } = from "react"


function rating(){
    const stars = Array, from({length: 5}, (_, i) => i + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const clicked = (index) => console.log('clicked', index)
    const feedbackMessage = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']

    const handleSumbit = () => {
        if (rating > 0){
            setSumit(true)
        }
    }

    const closeModal = () => 
        setSubmitted(false)
    setRating


    return (
        <div className= "rating-container">
            <h2>Rate your experience</h2>
            <p>{rating}</p>
            <p>{hover}</p>
            <div className= "stars">
                {[1,2,3,4,5].map((index) =>
                smap
                key={star}
                Onclick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                    className = {'star $star <= (hover || rating) ? 'active' : ''}'}
                >
                {'\u2605'}





                {rating > 0 && <p className="feedback">{feedbackMessage[rating - 1]}</p>}
                <button>
                  className= "submit-btn"
                    onClick={handleSubmit}
                    disabled={rating === 0}


                    Submit
                    </button>

                    submitted && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h2>Thank you!</h2>
                                <p> You rated us {rating} star {rating > 1 ? 's' : ''}.</p>
                                <button
                                onClick = "close-btn"
                                >
                                    close
                                    </button>
                            </div>
                    )




                    </div>

                );