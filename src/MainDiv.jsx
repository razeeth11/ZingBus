export function MainDiv() {
  return (
    <div className="main-div">
      <div className="main-search-comp">
        <div className="from-comp">
          <div className="from">
            <span class="material-symbols-outlined">location_on</span>
            <p>From City</p>
          </div>
          <div className="from-input">
            <input type="text" />
          </div>
        </div>
        <div className="to-comp">
          <div className="to">
            <span class="material-symbols-outlined">location_on</span>
            <p>To City</p>
          </div>
          <div className="To-input">
            <input type="text" />
          </div>
        </div>
        <div className="date-comp">
          <div className="date">
            <span class="material-symbols-outlined">calendar_month</span>
            <p>Date</p>
          </div>
          <div className="date-input">
            <input type="text" />
          </div>
        </div>
        <div className="search-comp">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
