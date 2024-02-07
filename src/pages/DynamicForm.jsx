


// import React, { useState, useEffect } from 'react';
// import {
//   Tabs,
//   Tab,
//   TextField,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
//   Checkbox,
//   Box,
//   Typography,
//   Button
// } from '@mui/material';
// import ResponsiveAppBar from "../components/ResponsiveAppBar";
// import pvcv from '../assets/pvcv';
// import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { fetchData } from '../redux/actions'; // Assuming this action is correctly defined
// import axios from 'axios';

// const DynamicForm = () => {
//   const dispatch = useDispatch();
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [selectedSubTab, setSelectedSubTab] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from backend API on component mount
//     axios.get('http://localhost:5000/api/data')
//       .then(response => setData(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const formik = useFormik({
//     initialValues: {},
//     onSubmit: (values) => {
//       console.log('Form values:', values);
//       // dispatch(sendFormData(values));
//       // Assuming you have defined the handleSubmit function
//       handleSubmit(values);
//     },
//   });

//   const renderFormElements = (elements) => {
//     return elements.map((element, index) => {
//       switch (element.df_design) {
//         case 'number':
//         case 'text':
//           return (
//             <Box key={element.df_key} p={2}>
//               <TextField
//                 label={element.df_title}
//                 type={element.df_design}
//                 required={element.df_input_required}
//                 {...formik.getFieldProps(element.df_key)}
//               />
//             </Box>
//           );
  
//         case 'accordion':
//           return (
//             <Accordion key={element.df_key}>
//               <AccordionSummary>{element.df_title}</AccordionSummary>
//               <AccordionDetails>
//                 <Box p={2}>
//                   {renderFormElements(element.df_elements)}
//                 </Box>
//               </AccordionDetails>
//             </Accordion>
//           );
  
//         case 'tabs':
//           return (
//             <div key={element.df_key}>
//               <Tabs
//                 value={selectedSubTab}
//                 onChange={handleChangeSubTab}
//                 indicatorColor="primary"
//                 textColor="primary"
//               >
//                 {element.df_elements.map((tab, tabIndex) => (
//                   <Tab key={tabIndex} label={tab.df_title} />
//                 ))}
//               </Tabs>
//               <Box p={2}>
//                 {renderFormElements(element.df_elements[selectedSubTab].df_elements)}
//               </Box>
//             </div>
//           );
  
//         case 'tab':
//           return (
//             <div key={element.df_key}>
//               <Typography variant="h6">{element.df_title}</Typography>
//               {renderFormElements(element.df_elements)}
//             </div>
//           );
  
//         case 'form':
//           return (
//             <div key={element.df_key}>
//               <Typography variant="h6">{element.df_title}</Typography>
//               {renderFormElements(element.df_elements)}
//             </div>
//           );
  
//         case 'toggle':
//           return (
//             <Box key={element.df_key} p={2}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={formik.values[element.df_key] === true}
//                     onChange={(e) => formik.setFieldValue(element.df_key, e.target.checked)}
//                     name={element.df_key}
//                   />
//                 }
//                 label={element.df_title}
//               />
//             </Box>
//           );
  
//         default:
//           return null;
//       }
//     });
//   };

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//     setSelectedSubTab(0);
//   };

//   const handleChangeSubTab = (event, newValue) => {
//     setSelectedSubTab(newValue);
//   };

//   const handleSubmit = async (values) => {
//     try {
//       // Send form data to backend
//       await axios.post('http://localhost:5000/api/data', values);
//       console.log('Form data submitted successfully');
//     } catch (error) {
//       console.error('Error submitting form data:', error);
//     }
//   };

//   return (
//     <div>
//       <ResponsiveAppBar name="Dynamic forms" />
//       <form onSubmit={formik.handleSubmit}>
//         <Tabs value={selectedTab} onChange={handleTabChange}>
//           {pvcv[0].data[0].df_elements.map((category, index) => (
//             <Tab key={index} label={category.df_title} />
//           ))}
//         </Tabs>
//         <Box p={2}>
//           {(pvcv[0].data[0].df_elements[selectedTab].df_key === 'hcv' ||
//             pvcv[0].data[0].df_elements[selectedTab].df_key === 'lcv') &&
//             renderFormElements(pvcv[0].data[0].df_elements[selectedTab].df_elements)
//           }
//         </Box>
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default DynamicForm;


import React, { useState, useEffect } from 'react';
import {
  Tabs,
  Tab,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Button
} from '@mui/material';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import pvcv from '../assets/pvcv';
import { useFormik } from 'formik';
import axios from 'axios';

const DynamicForm = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(0);

  useEffect(() => {
    // Fetch data from backend API on component mount (if needed)
  }, []);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log('Form values:', values);
      handleSubmit(values);
    },
  });

  const renderFormElements = (elements) => {
    return elements.map((element, index) => {
      switch (element.df_design) {
        case 'number':
        case 'text':
          return (
            <Box key={element.df_key} p={2}>
              <TextField
                label={element.df_title}
                type={element.df_design}
                required={element.df_input_required}
                {...formik.getFieldProps(element.df_key)}
              />
            </Box>
          );

        case 'accordion':
          return (
            <Accordion key={element.df_key}>
              <AccordionSummary>{element.df_title}</AccordionSummary>
              <AccordionDetails>
                <Box p={2}>
                  {renderFormElements(element.df_elements)}
                </Box>
              </AccordionDetails>
            </Accordion>
          );

        case 'tabs':
          return (
            <div key={element.df_key}>
              <Tabs
                value={selectedSubTab}
                onChange={handleChangeSubTab}
                indicatorColor="primary"
                textColor="primary"
              >
                {element.df_elements.map((tab, tabIndex) => (
                  <Tab key={tabIndex} label={tab.df_title} />
                ))}
              </Tabs>
              <Box p={2}>
                {renderFormElements(element.df_elements[selectedSubTab].df_elements)}
              </Box>
            </div>
          );

        case 'tab':
          return (
            <div key={element.df_key}>
              <Typography variant="h6">{element.df_title}</Typography>
              {renderFormElements(element.df_elements)}
            </div>
          );

        case 'form':
          return (
            <div key={element.df_key}>
              <Typography variant="h6">{element.df_title}</Typography>
              {renderFormElements(element.df_elements)}
            </div>
          );

        case 'toggle':
          return (
            <Box key={element.df_key} p={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values[element.df_key] === true}
                    onChange={(e) => formik.setFieldValue(element.df_key, e.target.checked)}
                    name={element.df_key}
                  />
                }
                label={element.df_title}
              />
            </Box>
          );

        default:
          return null;
      }
    });
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedSubTab(0);
  };

  const handleChangeSubTab = (event, newValue) => {
    setSelectedSubTab(newValue);
  };

  const updateDfValues = (elements, values) => {
    elements.forEach(element => {
      if (element.df_elements) {
        updateDfValues(element.df_elements, values);
      } else {
        if (values.hasOwnProperty(element.df_key)) {
          element.df_value = values[element.df_key];
        }
      }
    });
  };
  
  const handleSubmit = async (values) => {
    try {
      // Deep copy the pvcv object to avoid mutating the original object
      const updatedPVCV = JSON.parse(JSON.stringify(pvcv));
  
      // Update df_value fields with the form values entered by the user
      updatedPVCV.forEach(masterItem => {
        masterItem.data.forEach(dataItem => {
          dataItem.df_elements.forEach(element => {
            updateDfValues(element.df_elements, values);
          });
        });
      });
  
      console.log('Updated pvcv:', updatedPVCV);
  
      // Send updated form data to the backend API
      await axios.post('http://localhost:5000/api/data', updatedPVCV);
      console.log('Form data submitted successfully');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  
  
  
  

  return (
    <div>
      <ResponsiveAppBar name="Dynamic forms" />
      <form onSubmit={formik.handleSubmit}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          {pvcv[0].data[0].df_elements.map((category, index) => (
            <Tab key={index} label={category.df_title} />
          ))}
        </Tabs>
        <Box p={2}>
          {(pvcv[0].data[0].df_elements[selectedTab].df_key === 'hcv' ||
            pvcv[0].data[0].df_elements[selectedTab].df_key === 'lcv') &&
            renderFormElements(pvcv[0].data[0].df_elements[selectedTab].df_elements)
          }
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DynamicForm;
