import React, { Component } from "react";
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormControl,
    FormHelperText,
    Radio,
    RadioGroup,
    FormControlLabel
} from "@material-ui/core"

export default class Stocks extends Component {
    
    constructor(props) {
        super(props);
    }

    ComponentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
    
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Stocks
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <RadioGroup row defaultValue="true">
                            <FormControlLabel
                                value="VTI"
                                control={<Radio color="primary"/>}
                                label="VTI"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="VXUS"
                                control={<Radio color="primary"/>}
                                label="VXUS"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="OTHER"
                                control={<Radio color="primary"/>}
                                label="Other:"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                        <TextField
                            required={false}
                            type="string"
                            defaultValue={"$"}
                        />
                        <FormHelperText>
                            <div align="center">Other stock</div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}
