import React from "react";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

class ArticlePage extends React.Component{
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }
    render(){
        const { classes, ...rest } = this.props;
        return(
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(ArticlePage);