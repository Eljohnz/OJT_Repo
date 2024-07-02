CREATE TABLE patients (
    patient_id INT,
    session_date DATE,
    blood_type_id INT,
    last_name varchar(255),
    first_name varchar(255),
    extension_name_id INT,
    middle_name varchar(255),
    patient_age INT(255),
    gender varchar(255),
    birthdate_id DATE,

    PRIMARY KEY(patient_id),
    FOREIGN KEY (blood_type_id) REFERENCES blood_types(blood_type_id),
    FOREIGN KEY (extension_name_id) REFERENCES extension_names(extension_name_id)
)

CREATE TABLE patient_sessions (
    patient_session_id INT,
    patient_id INT,
    session_date DATE,
    patient_diagnosis_id INT,
    safety_check_id INT,
    anticoagulation_id INT,
    prescription_verification_id INT,
    ultrafiltration_id INT,
    hemodialysis_access_id INT,
    condition_of_access_id INT,
    pre_post_hemo_wt_vital_id INT,
    medication_id INT,
    additional_info_id INT,

    PRIMARY KEY (patient_session_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (patient_diagnosis_id) REFERENCES patient_diagnoses(patient_diagnosis_id),
    FOREIGN KEY (safety_check_id) REFERENCES safety_checks(safety_check_id),
    FOREIGN KEY (anticoagulation_id) REFERENCES anticoagulations(anticoagulation_id),
    FOREIGN KEY (prescription_verification_id) REFERENCES prescription_verifications(prescription_verification_id),
    FOREIGN KEY (ultrafiltration_id) REFERENCES utrafiltration(ultrafiltration_id),
    FOREIGN KEY (hemodialysis_access_id) REFERENCES hemodialysis_access(hemodialysis_access_id),
    FOREIGN KEY (condition_of_access_id) REFERENCES condition_of_accesses(condition_of_access_id),
    FOREIGN KEY (pre_post_hemo_wt_vital_id) REFERENCES pre_post_hemo_wt_vital(pre_post_hemo_wt_vital_id),
    FOREIGN KEY (medication_id) REFERENCES medication_administrations(medication_id),
    FOREIGN KEY (additional_info_id) REFERENCES additional_info(additional_info_id),

)


CREATE TABLE blood_types(
    blood_type_id INT,
    blood_type VARCHAR(5),

    PRIMARY KEY(blood_type_id)
)

CREATE TABLE extension_names (
    extension_name_id INT,
    extension_name VARCHAR(5),
    
    PRIMARY KEY(extension_name_id)


)

CREATE TABLE patient_diagnoses(
    patient_diagnosis_id int,
    patient_id INT,
    treatment_plan varchar(255),
    chronic_disease_stage varchar(255),
    maintenance_hemodialysis_per_week varchar(255),

    PRIMARY KEY(patient_diagnosis_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    
)

CREATE TABLE safety_checks(
    safety_check_id int,
    patient_id INT,
    conductivity varchar(255),
    self_test varchar(255),
    air_detector varchar(255),
    blood_leak varchar(255),

    PRIMARY KEY(safety_check_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
)

CREATE TABLE anticoagulations(
    anticoagulation_id INT,
    patient_id INT,
    heparin varchar (255),
    lmwh varchar(255),
    nss varchar(255),

    PRIMARY KEY(anticoagulation_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
)


CREATE Table prescription_verifications (
    prescription_verification_id INT,
    patient_id INT,
    dialyzer_size VARCHAR(255),
    no_of_use INT,
    machine_no VARCHAR(255),
    residual_test_done VARCHAR(255),
    hd_time_start TIME,
    hd_time_end TIME,
    dh_duration VARCHAR(255),
    hd_modality VARCHAR(255),
    dialysate_flow VARCHAR(255),
    hco3_ml_min INT,
    kplus_bath_meqs VARCHAR(255),

    PRIMARY KEY (prescription_verification_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
)

CREATE TABLE utrafiltration(
    ultrafiltration_id int,
    patient_id INT,
    pre-hd_wt-kg int(255),
    dry_wt-kg int(255),
    wt_gain-kg int(255),
    reinfusion_ml int(255),
    others_ml int(255),
    total_uf_goal_ml int(255),

    PRIMARY KEY(ultrafiltration_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
)



CREATE TABLE hemodialysis_access(
    hemodialysis_access_id int,
    patient_id INT,
    permanent_arteriovenus_id INT,

    PRIMARY KEY(hemodialysis_access_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (permanent_arteriovenus_id) REFERENCES permanent_arteriovenus(permanent_arteriovenus_id),
    FOREIGN KEY (temporary_catheter_id) REFERENCES temporary_catheter(temporary_catheter_id)

)

CREATE TABLE permanent_arteriovenus(
    permanent_arteriovenus_id int,
    fistula varchar(255),
    graft varchar(255),
    position varchar(255),
    cannulaton_attempt_a_b varchar(255),
    PRIMARY KEY(permanent_arteriovenus_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (hemodialysis_access_id) REFERENCES hemodialysis_access(hemodialysis_access_id)

)

CREATE TABLE temporary_catheter(
    temporary_catheter_id int,
    patient_id int,
    hemodialysis_access_id int,
    ij varchar(255),
    subclavian varchar(255),
    femoral varchar(255),
    permcath varchar(255),
    position varchar(255),

    PRIMARY KEY(temporary_catheter_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (hemodialysis_access_id) REFERENCES hemodialysis_access(hemodialysis_access_id)
)



CREATE TABLE conditions_of_accesses(
    condition_of_access_id int,
    patient_id int,
    pre_hemo_id int,
    post_hemo_id int,
    insertion_site_id int,
    catheter_ports_id INT,

    PRIMARY KEY(condition_of_access_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (pre_hemo_id) REFERENCES pre_hemos(pre_hemo_id),
    FOREIGN KEY (post_hemo_id) REFERENCES post_hemos(post_hemo_id),
    FOREIGN KEY (insertion_site_id) REFERENCES insertion_sites(insertion_site_id),
    FOREIGN KEY (catheter_ports_id) REFERENCES catheter_ports(catheter_ports_id),
)

CREATE TABLE pre_hemos(
    pre_hemo_id int,
    bruit varchar(255),
    thrill varchar(255),
    bruise varchar(255),

    PRIMARY KEY(pre_hemo_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    Foreign Key (condition_of_access_id) REFERENCES condition_of_accesses(condition_of_access_id)
)

CREATE TABLE post_hemos(
    post_hemo_id int,
    bruit varchar(255),
    thrill varchar(255),
    bruise varchar(255),

    PRIMARY KEY(post_hemo),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    Foreign Key (condition_of_access_id) REFERENCES condition_of_accesses(condition_of_access_id)

)

CREATE TABLE insertion_sites(
    insertion_site_id int,
    normal varchar(255),
    tender varchar(255),
    discharges varchar(255),
    redness varchar(255),
    PRIMARY KEY(insertion_site_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    Foreign Key (condition_of_access_id) REFERENCES condition_of_accesses(condition_of_access_id)

)

CREATE TABLE catheter_ports(
    catheter_ports_id INT,
    patient_id INT,
    condition_of_access_id INT,
    good_flow varchar(255),
    clotted varchar(255),
    resistance varchar(255),
    no_output varchar(255),

    PRIMARY KEY(catheter_ports_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    Foreign Key (condition_of_access_id) REFERENCES condition_of_accesses(condition_of_access_id)
)

CREATE TABLE pre_post_hemo_wt_vital (
    pre_post_hemo_wt_vital_id INT,
    patient_id INT FOREIGN KEY (patients) REFERENCES patients(patient_id),
    pre_hd_id INT,
    post_hd_id INT,

    PRIMARY KEY (pre_post_hemo_wt_vital_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (pre_hd_id) REFERENCES pre_hds(pre_hd_id),
    FOREIGN KEY (post_hd_id) REFERENCES post_hds(post_hd_id)
)

CREATE TABLE pre_hds (
    pre_hd_id INT,
    patient_id INT,
    rr bpm INT,
    hr bpm INT,
    t_c INT,

    PRIMARY KEY (pre_hd_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
)


CREATE TABLE post_hds (
    post_hd_id INT,
    patient_id INT,
    wt_kg INT,
    bp_mmhg INT,
    rr bpm INT,
    hr bpm INT,
    t_c INT,

    PRIMARY KEY (post_hd_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)

)

CREATE TABLE medication_administrations (
    medication_id INT,
    patient_id INT,
    medication VARCHAR(255),
    dosage VARCHAR(255),
    medication_route VARCHAR(255),
    medication_time VARCHAR(255),
    medication_signature VARCHAR(255),

    PRIMARY KEY (medication_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)

)

CREATE TABLE additional_info(
    additional_info_id int,
    progress_note varchar(255),
    doctors_order varchar(255),
    attending_physician varchar(255),
    primed varchar(255),
    safety_checked varchar(255),
    initiated varchar(255),
    monitored varchar(255),
    terminated varchar(255),
    nurse_on_duty varchar(255),

    PRIMARY KEY(additional_info_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
)

CREATE TABLE USERS (
    user_id INT,
    email_address VARCHAR(255),
    user_password VARCHAR(255),
    user_role_id VARCHAR(255),

    PRIMARY KEY (user_id)
)

CREATE Table user_roles (
    user_role_id INT,
    user_role VARCHAR(255),
    -- privileges

    PRIMARY KEY (user_role_id)
)
