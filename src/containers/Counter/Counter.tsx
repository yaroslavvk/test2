import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './actions'
import * as selectors from './selectors'

export default () => {
  const count = useSelector(selectors.getCountValue)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div>
        <div>
          <div>
            <div>
              <h4>
                Counter: <strong>{count}</strong>
              </h4>
            </div>
            <div>
              <div>
                <button
                  className="waves-effect waves-teal btn-flat blue"
                  type="button"
                  data-qa="decrement-counter"
                  onClick={() => {
                    dispatch({
                      type: actions.COUNTER_DECREMENT,
                      payload: {
                        value: 1,
                      },
                    })
                  }}
                >
                  decrement
                </button>
                <button
                  className="waves-effect waves-teal btn-flat red"
                  type="button"
                  data-qa="increment-counter"
                  onClick={() =>
                    dispatch({
                      type: actions.COUNTER_ASYNC_INCREMENT_START,
                      payload: {
                        value: 1,
                      },
                    })
                  }
                >
                  increment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
