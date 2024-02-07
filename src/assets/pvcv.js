const pvcv = [
    {
        "master_id": 1,
        "product": "VF",
        "vehicle_category": "commercial_vehicle",
        "data": [
            {
                "df_key": "commercial_vehicle",
                "df_title": "Commercial vehicle",
                "df_design": "tab",
                "df_icon": "",
                "df_elements": [
                  {
                    "df_key": "hcv",
                    "df_title": "HCV",
                    "df_design": "tab",
                    "df_icon": "vehicle",
                    "df_elements": [
                      {
                        "df_key": "hcv_loan_details",
                        "df_title": "Loan Details",
                        "df_design": "accordion",
                        "df_icon": "",
                        "df_elements": [
                          {
                            "df_key": "hcv_minimum_loan_amount",
                            "df_title": "Minimum Loan Amount",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          },
                          {
                            "df_key": "hcv_maximum_loan_amount",
                            "df_title": "Maximum Loan Amount",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          },
                          {
                            "df_key": "hcv_revised_loan_amount_min",
                            "df_title": "Revised Loan Amount Min",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          },
                          {
                            "df_key": "hcv_idv_percentage",
                            "df_title": "IDV Percentage",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          }
                        ]
                      },
                      {
                        "df_key": "hcv_credit_score",
                        "df_title": "Credit Score",
                        "df_design": "tabs",
                        "df_elements": [
                          {


                            "df_key": "hcv_720+",
                            "df_title": "720+",
                            "df_design": "tab",
                            "df_elements": [
                              {
                                "df_key": "hcv_720+_hcv_fees_other_charges",
                                "df_title": "Fees Other Charges",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "hcv_720+_processing_fee",
                                    "df_title": "processing_fee",
                                    "df_design": "number",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "1"
                                  }
                                ]
                              },
                              {
                                "df_key": "hcv_720+_insurance_details",
                                "df_title": "Insurance Details",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "hcv_720+_vehicle_fitness",
                                    "df_title": "vehicle_fitness",
                                    "df_design": "toggle",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "on"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "df_key": "hcv_650+",
                            "df_title": "650 to 719",
                            "df_design": "tab",
                            "df_elements": [
                              {
                                "df_key": "hcv_650+_hcv_fees_other_charges",
                                "df_title": "Fees Other Charges",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "hcv_650+_hcv_processing_fee",
                                    "df_title": "processing_fee",
                                    "df_design": "number",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "1"
                                  }
                                ]
                              },
                              {
                                "df_key": "hcv_650+_hcv_insurance_details",
                                "df_title": "Insurance Details",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "hcv_650+_vehicle_fitness",
                                    "df_title": "vehicle_fitness",
                                    "df_design": "toggle",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "on"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "df_key": "lcv",
                    "df_title": "LCV",
                    "df_design": "tab",
                    "df_icon": "vehicle",
                    "df_elements": [
                      {
                        "df_key": "loan_details",
                        "df_title": "Loan Details",
                        "df_design": "accordion",
                        "df_icon": "",
                        "df_elements": [
                          {
                            "df_key": "lcv_minimum_loan_amount",
                            "df_title": "Minimum Loan Amount",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          },
                          {
                            "df_key": "lcv_maximum_loan_amount",
                            "df_title": "Maximum Loan Amount",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          },
                          {
                            "df_key": "lcv_revised_loan_amount_min",
                            "df_title": "Revised Loan Amount Min",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          },
                          {
                            "df_key": "lcv_idv_percentage",
                            "df_title": "IDV Percentage",
                            "df_design": "number",
                            "df_input_required": true,
                            "df_input": "external",
                            "df_value": "100000"
                          }
                        ]
                      },
                      {
                        "df_key": "lcv_credit_score",
                        "df_title": "Credit Score",
                        "df_design": "tabs",
                        "df_elements": [
                          {
                            "df_key": "lcv_720+",
                            "df_title": "720+",
                            "df_design": "tab",
                            "df_elements": [
                              {
                                "df_key": "lcv_720+_fees_other_charges",
                                "df_title": "Fees Other Charges",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "lcv_720+_processing_fee",
                                    "df_title": "processing_fee",
                                    "df_design": "number",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "1"
                                  }
                                ]
                              },
                              {
                                "df_key": "lcv_720+_insurance_details",
                                "df_title": "Insurance Details",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "lcv_720+_vehicle_fitness",
                                    "df_title": "vehicle_fitness",
                                    "df_design": "toggle",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "on"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "df_key": "lcv_650+",
                            "df_title": "650 to 719",
                            "df_design": "tab",
                            "df_elements": [
                              {
                                "df_key": "lcv_650+_fees_other_charges",
                                "df_title": "Fees Other Charges",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "lcv_650+_processing_fee",
                                    "df_title": "processing_fee",
                                    "df_design": "number",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "1"
                                  }
                                ]
                              },
                              {
                                "df_key": "lcv_650+_insurance_details",
                                "df_title": "Insurance Details",
                                "df_design": "form",
                                "df_icon": "",
                                "df_elements": [
                                  {
                                    "df_key": "lcv_650+_vehicle_fitness",
                                    "df_title": "vehicle_fitness",
                                    "df_design": "toggle",
                                    "df_input_required": true,
                                    "df_input": "external",
                                    "df_value": "on"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
              
        ]
    }
];

export default pvcv;