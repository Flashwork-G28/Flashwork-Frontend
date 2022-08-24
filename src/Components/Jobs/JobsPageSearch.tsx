import React from 'react';
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const JobsPageSearch = () => {
    const [Wtype, setWtype] = React.useState('');

    const handleChangeType = (event: SelectChangeEvent) => {
        setWtype(event.target.value);
    };


    const [Catagoris, setCatagoris] = React.useState('');

    const handleChangeCatagoris = (event: SelectChangeEvent) => {
        setCatagoris(event.target.value);
    };


    const [Location, setLocation] = React.useState('');

    const handleChangeLocation = (event: SelectChangeEvent) => {
        setLocation(event.target.value);
    };

    return (
        <>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{paddingTop:5}}>

                <FormControl sx={{  minWidth: 220 }} size="small">
                    <InputLabel id="demo-select-small">All Catagoris</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Catagoris}
                        label="Catagoris"
                        onChange={handleChangeCatagoris}>
                        <MenuItem value="">
                            <em>All Catagoris</em>
                        </MenuItem>
                        <MenuItem value={1}>Restaurant & food services</MenuItem>
                        <MenuItem value={2}>Transportation & delivery</MenuItem>
                        <MenuItem value={3}>Retail & Production</MenuItem>
                        <MenuItem value={4}>Office work & Administration</MenuItem>
                        <MenuItem value={5}>General services</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 220 }} size="small">
                    <InputLabel id="demo-select-small">Any Location</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Location}
                        label="Location"
                        onChange={handleChangeLocation}>
                        <MenuItem value="">
                            <em>Any Location</em>
                        </MenuItem>
                        <MenuItem value={1}>Galle</MenuItem>
                        <MenuItem value={2}>Matara</MenuItem>
                        <MenuItem value={3}>Nugegoda</MenuItem>
                        <MenuItem value={4}>Maharagama</MenuItem>
                        <MenuItem value={5}>Kirulapana</MenuItem>
                        <MenuItem value={6}>Kahawaththa</MenuItem>
                        <MenuItem value={7}>Panadura</MenuItem>
                        <MenuItem value={8}>Kohuwala</MenuItem>
                        <MenuItem value={9}>Delkanda</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{  minWidth: 220 }} size="small">
                    <InputLabel id="demo-select-small">Number of Workers</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Wtype}
                        label="Wtype"
                        onChange={handleChangeType}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={2}>3</MenuItem>
                        <MenuItem value={2}>4</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="secondary" >Search</Button>
            </Stack>
        </>
    );
};

export default JobsPageSearch;
