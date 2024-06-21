class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    componentDidMount() {
      console.log('Component did mount');
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        console.log('Component did update');
      }
    }
  
    componentWillUnmount() {
      console.log('Component will unmount');
    }
  
    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increment
          </button>
        </div>
      );
    }
  }
  