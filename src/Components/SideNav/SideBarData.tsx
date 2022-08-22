import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ForumIcon from '@mui/icons-material/Forum';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TableViewIcon from '@mui/icons-material/TableView';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RecentActorsIcon from '@mui/icons-material/RecentActors';


export const JobProviderSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard/jobprovider/home",
        icon: <AutoAwesomeMosaicIcon fontSize="large"/>
    },
    {
        title: "Profile",
        path: "/dashboard/jobprovider/profile",
        icon: <PersonIcon fontSize="large"/>
    },
    {
        title: "Advertisements",
        path: "/dashboard/jobprovider/advertisements",
        icon: <TableViewIcon fontSize="large"/>
    },

    {
        title: "Report",
        path: "/dashboard/jobprovider/report",
        icon: <EventNoteIcon fontSize="large"/>
    },
    {
        title: "Help",
        path: "/dashboard/jobprovider/help",
        icon: <ForumIcon fontSize="large"/>
    },
];

export const JobSeekerSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard/jobseeker/home",
        icon: <AutoAwesomeMosaicIcon fontSize="large"/>
    },
    {
        title: "Profile",
        path: "/dashboard/jobseeker/profile",
        icon: <PersonIcon fontSize="large"/>
    },
    {
        title: "Request",
        path: "/dashboard/jobseeker/request",
        icon: <CoPresentIcon fontSize="large"/>
    },
    {
        title: "Report",
        path: "/dashboard/jobseeker/repeort",
        icon: <EventNoteIcon fontSize="large"/>
    },
    {
        title: "Help",
        path: "/dashboard/jobseeker/help",
        icon: <ForumIcon fontSize="large"/>
    },
];

export const ManPowerSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard/manpower/home",
        icon: <AutoAwesomeMosaicIcon fontSize="large"/>
    },
    {
        title: "Profile",
        path: "/dashboard/manpower/profile",
        icon: <PersonIcon fontSize="large"/>
    },
    {
        title: "Member",
        path: "/dashboard/manpower/member",
        icon: <AssignmentIndIcon fontSize="large"/>
    },
    {
        title: "Request",
        path: "/dashboard/manpower/request",
        icon: <CoPresentIcon fontSize="large"/>
    },
    {
        title: "Report",
        path: "/dashboard/manpower/report",
        icon: <EventNoteIcon fontSize="large"/>
    },
    {
        title: "Help",
        path: "/dashboard/manpower/help",
        icon: <ForumIcon fontSize="large"/>
    },
];

export const AdminSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard/admin/home",
        icon: <AutoAwesomeMosaicIcon fontSize="large"/>
    },
    {
        title: "Payment",
        path: "/dashboard/admin/payment",
        icon: <PaymentsIcon fontSize="large"/>
    },
    {
        title: "User Request",
        path: "/dashboard/admin/userrequest",
        icon: <RecentActorsIcon fontSize="large"/>
    },
    {
        title: "All Users",
        path: "/dashboard/admin/allusers",
        icon: <PeopleAltIcon fontSize="large"/>
    }
];
