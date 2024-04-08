import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }

    render() {
        return (
            <div>
                <div className="row search">
                    <input
                    id="search_inline"
                    type="search"
                    placeholder="search"
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                    />
                    <a href="#!" className="waves-effect btn blue accent-2"
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
                        Search
                    </a>
                </div>

                <div className="radio_Movies">
                    <label>
                        <input
                            className="with-gap"
                            name="group"
                            type="radio"
                            checked={this.state.type === "all"}
                            data-type="all"
                            onChange={this.handleFilter}
                        />
                        <span>All</span>    
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group"
                            type="radio"
                            checked={this.state.type === "movie"}
                            data-type="movie"
                            onChange={this.handleFilter}
                        />
                        <span>Movies only</span>    
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group"
                            type="radio"
                            checked={this.state.type === "series"}
                            data-type="series"
                            onChange={this.handleFilter}
                        />
                        <span>Series only</span>    
                    </label>
                </div>
            </div>
        )
    }
}

export { Search }