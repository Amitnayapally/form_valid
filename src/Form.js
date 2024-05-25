import React, { useState } from "react";
import "./Form.css"; // Importing CSS for styling

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    countryCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    // First Name
    if (!formData.firstName) {
      formIsValid = false;
      errors["firstName"] = "First Name is required";
    } else if (formData.firstName.length > 10) {
      formIsValid = false;
      errors["firstName"] = "First Name must be 10 characters or less";
    }

    // Last Name
    if (!formData.lastName) {
      formIsValid = false;
      errors["lastName"] = "Last Name is required";
    } else if (formData.lastName.length > 10) {
      formIsValid = false;
      errors["lastName"] = "Last Name must be 10 characters or less";
    }

    // Username
    if (!formData.username) {
      formIsValid = false;
      errors["username"] = "Username is required";
    } else if (formData.username.length > 6) {
      formIsValid = false;
      errors["username"] = "Username must be 6 characters or numbers";
    }

    // Email
    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Email is invalid";
    }

    // Password
    if (!formData.password) {
      formIsValid = false;
      errors["password"] = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        formData.password
      )
    ) {
      formIsValid = false;
      errors["password"] =
        "Password must be 8 characters and it contain one Capital letter, Small Letter, Number & Special symbol...!!";
    }

    // Phone Number
    if (!formData.phoneNumber) {
      formIsValid = false;
      errors["phone"] = "Phone number with country code is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      formIsValid = false;
      errors["phone"] = "Phone number must be 10 digits";
    }

    // Country
    if (!formData.country) {
      formIsValid = false;
      errors["country"] = "Country is required";
    }

    // City
    if (!formData.city) {
      formIsValid = false;
      errors["city"] = "City is required";
    }

    // PAN and Aadhar
    if (!formData.panNo) {
      formIsValid = false;
      errors["panNo"] = "PAN number is required";
    } else if (!/^[A-Za-z0-9]{10}$/.test(formData.panNo)) {
      formIsValid = false;
      errors["panNo"] = "PAN number must be 10 characters or numbers";
    }

    if (!formData.aadharNo) {
      formIsValid = false;
      errors["aadharNo"] = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadharNo)) {
      formIsValid = false;
      errors["aadharNo"] = "Aadhar number must be 12 digits";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <h1><center>User Form</center></h1>
          <div className="form-field">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <span className="error">{errors.firstName}</span>
          </div>

          <div className="form-field">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <span className="error">{errors.lastName}</span>
          </div>

          <div className="form-field">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <span className="error">{errors.username}</span>
          </div>

          <div className="form-field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>

          <div className="form-field">
            <label>Password:</label>
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="button" className="button-toggle" onClick={togglePasswordVisibility}>
              {formData.showPassword ? "Hide" : "Show"}
            </button>
            <span className="error">{errors.password}</span>
          </div>

          <div className="form-field">
            <label>Phone Number:</label>
            <select name="countryCode" value={formData.ccountryCode} onChange={handleChange}>
              <option value="">Select Country Code</option>
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (United States)</option>
              <option value="+44">+44 (United Kingdom)</option>
              <option value="+93">+93 (Afghanistan)</option>
              <option value="+54">+54 (Argentina)</option>
              <option value="+374">+374 (Armenia)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+880">+880 (Bangladesh)</option>
              <option value="+32">+32 (Belgium)</option>
              <option value="+229">+229 (Benin)</option>
              <option value="+975">+975 (Bhutan)</option>
              <option value="+55">+55 (Brazil)</option>
              <option value="+855">+855 (Cambodia)</option>
              <option value="+237">+237 (Cameroon)</option>
              <option value="+1">+1 (Canada)</option>
              <option value="+86">+86 (China)</option>
              <option value="+57">+57 (Colombia)</option>
              <option value="+45">+45 (Denmark)</option>
              <option value="+593">+593 (Ecuador)</option>
              <option value="+20">+20 (Egypt)</option>
              <option value="+33">+33 (France)</option>
              <option value="+241">+241 (Gabon)</option>
              <option value="+220">+220 (Gambia)</option>
              <option value="+995">+995 (Georgia)</option>
              <option value="+49">+49 (Germany)</option>
              <option value="+974">+974 (Qatar)</option>
              <option value="+48">+48 (Poland)</option>
              <option value="+92">+92 (Pakistan)</option>
              <option value="+351">+351 (Portugal)</option>
              <option value="+7">+7 (Russia)</option>
            </select>

            <input
              type="text"
              name="phoneNumber"
              placeholder="Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <span className="error">{errors.phone}</span>
          </div>

          <div className="form-field">
            <label>Country:</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="AF">Afghanistan</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AU">Australia</option>
              <option value="BD">Bangladesh</option>
              <option value="BE">Belgium</option>
              <option value="BJ">Benin</option>
              <option value="BT">Bhutan</option>
              <option value="BR">Brazil</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="DK">Denmark</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="QA">Qatar</option>
              <option value="PL">Poland</option>
              <option value="PK">Pakistan</option>
              <option value="PT">Portugal</option>
              <option value="RU">Russia</option>
          </select>
            <span className="error">{errors.country}</span>
          </div>

          <div className="form-field">
            <label>City:</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {formData.country === "IN" && (
                <>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Pune">Pune</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Surat">Surat</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Patna">Patna</option>
                  <option value="Indore">Indore</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Agra">Agra</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Kalyan-Dombivali">Kalyan-Dombivali</option>
                  <option value="Vasai-Virar">Vasai-Virar</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Dhanbad">Dhanbad</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Navi Mumbai">Navi Mumbai</option>
                  <option value="Allahabad">Allahabad</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Howrah">Howrah</option>
                  <option value="Jabalpur">Jabalpur</option>
                  <option value="Gwalior">Gwalior</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Jodhpur">Jodhpur</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Kota">Kota</option>
                  <option value="Guwahati">Guwahati</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Solapur">Solapur</option>
                  <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Tiruchirappalli">Tiruchirappalli</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Moradabad">Moradabad</option>
                  <option value="Bhiwandi">Bhiwandi</option>
                  <option value="Jalandhar">Jalandhar</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Salem">Salem</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Saharanpur">Saharanpur</option>
                  <option value="Warangal">Warangal</option>
                  <option value="Mira-Bhayandar">Mira-Bhayandar</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Bikaner">Bikaner</option>
                  <option value="Noida">Noida</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                  <option value="Bhilai">Bhilai</option>
                  <option value="Cuttack">Cuttack</option>
                  <option value="Firozabad">Firozabad</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Bhavnagar">Bhavnagar</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Durgapur">Durgapur</option>
                  <option value="Asansol">Asansol</option>
                  <option value="Nanded">Nanded</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Ajmer">Ajmer</option>
                  <option value="Gulbarga">Gulbarga</option>
                  <option value="Jamnagar">Jamnagar</option>
                  <option value="Ujjain">Ujjain</option>
                  <option value="Loni">Loni</option>
                  <option value="Siliguri">Siliguri</option>
                  <option value="Jhansi">Jhansi</option>
                  <option value="Ulhasnagar">Ulhasnagar</option>
                  <option value="Nellore">Nellore</option>
                  <option value="Jammu">Jammu</option>
                  <option value="Sangli-Miraj & Kupwad">Sangli-Miraj & Kupwad</option>
                  <option value="Belgaum">Belgaum</option>
                  <option value="Mangalore">Mangalore</option>
                  <option value="Ambattur">Ambattur</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Malegaon">Malegaon</option>
                  <option value="Gaya">Gaya</option>
                  <option value="Udaipur">Udaipur</option>
                  <option value="Maheshtala">Maheshtala</option>
                  <option value="Davanagere">Davanagere</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Akola">Akola</option>
                  <option value="Kurnool">Kurnool</option>
                </>
              )}
              {formData.country === "US" && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Philadelphia">Philadelphia</option>
              </>
            )}
            {formData.country === "UK" && (
              <>
                <option value="London">London</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Bristol">Bristol</option>
                <option value="Sheffield">Sheffield</option>
              </>
            )}
            {formData.country === "AF" && (
              <>
                <option value="Kabul">Kabul</option>
                <option value="Kandahar">Kandahar</option>
                <option value="Herat">Herat</option>
                <option value="Mazar-i-Sharif">Mazar-i-Sharif</option>
                <option value="Jalalabad">Jalalabad</option>
                <option value="Kunduz">Kunduz</option>
              </>
            )}
            {formData.country === "AR" && (
              <>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Rosario">Rosario</option>
                <option value="Mendoza">Mendoza</option>
                <option value="La Plata">La Plata</option>
                <option value="Mar del Plata">Mar del Plata</option>
              </>
            )}
            {formData.country === "AM" && (
              <>
                <option value="Yerevan">Yerevan</option>
                <option value="Gyumri">Gyumri</option>
                <option value="Vanadzor">Vanadzor</option>
                <option value="Hrazdan">Hrazdan</option>
                <option value="Vagharshapat">Vagharshapat</option>
                <option value="Abovyan">Abovyan</option>
              </>
            )}
            {formData.country === "AU" && (
              <>
                <option value="Sydney">Sydney</option>
                <option value="Melbourne">Melbourne</option>
                <option value="Brisbane">Brisbane</option>
                <option value="Perth">Perth</option>
                <option value="Adelaide">Adelaide</option>
                <option value="Canberra">Canberra</option>
              </>
            )}
            {formData.country === "BD" && (
              <>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Barisal">Barisal</option>
              </>
            )}
            {formData.country === "BE" && (
              <>
                <option value="Brussels">Brussels</option>
                <option value="Antwerp">Antwerp</option>
                <option value="Ghent">Ghent</option>
                <option value="Charleroi">Charleroi</option>
                <option value="Liège">Liège</option>
                <option value="Bruges">Bruges</option>
              </>
            )}
            {formData.country === "BJ" && (
              <>
                <option value="Cotonou">Cotonou</option>
                <option value="Porto-Novo">Porto-Novo</option>
                <option value="Parakou">Parakou</option>
                <option value="Djougou">Djougou</option>
                <option value="Bohicon">Bohicon</option>
                <option value="Kandi">Kandi</option>
              </>
            )}
            {formData.country === "BT" && (
              <>
                <option value="Thimphu">Thimphu</option>
                <option value="Phuntsholing">Phuntsholing</option>
                <option value="Punakha">Punakha</option>
                <option value="Wangdue Phodrang">Wangdue Phodrang</option>
                <option value="Gelephu">Gelephu</option>
                <option value="Trongsa">Trongsa</option>
              </>
            )}
            {formData.country === "BR" && (
              <>
                <option value="São Paulo">São Paulo</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Belo Horizonte">Belo Horizonte</option>
                <option value="Brasília">Brasília</option>
                <option value="Salvador">Salvador</option>
                <option value="Fortaleza">Fortaleza</option>
              </>
            )}
            {formData.country === "KH" && (
              <>
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Siem Reap">Siem Reap</option>
                <option value="Battambang">Battambang</option>
                <option value="Sihanoukville">Sihanoukville</option>
                <option value="Poipet">Poipet</option>
                <option value="Ta Khmau">Ta Khmau</option>
              </>
            )}
            {formData.country === "CM" && (
              <>
                <option value="Yaoundé">Yaoundé</option>
                <option value="Douala">Douala</option>
                <option value="Garoua">Garoua</option>
                <option value="Kousséri">Kousséri</option>
                <option value="Bamenda">Bamenda</option>
                <option value="Maroua">Maroua</option>
              </>
            )}
            {formData.country === "CA" && (
              <>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Montreal">Montreal</option>
                <option value="Calgary">Calgary</option>
                <option value="Ottawa">Ottawa</option>
                <option value="Edmonton">Edmonton</option>
              </>
            )}
            {formData.country === "CN" && (
              <>
                <option value="Beijing">Beijing</option>
                <option value="Shanghai">Shanghai</option>
                <option value="Guangzhou">Guangzhou</option>
                <option value="Shenzhen">Shenzhen</option>
                <option value="Chengdu">Chengdu</option>
                <option value="Wuhan">Wuhan</option>
              </>
            )}
            {formData.country === "CO" && (
              <>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cali">Cali</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
              </>
            )}
            {formData.country === "DK" && (
              <>
                <option value="Copenhagen">Copenhagen</option>
                <option value="Aarhus">Aarhus</option>
                <option value="Odense">Odense</option>
                <option value="Aalborg">Aalborg</option>
                <option value="Esbjerg">Esbjerg</option>
                <option value="Randers">Randers</option>
              </>
            )}
            {formData.country === "EC" && (
              <>
                <option value="Quito">Quito</option>
                <option value="Guayaquil">Guayaquil</option>
                <option value="Cuenca">Cuenca</option>
                <option value="Santo Domingo">Santo Domingo</option>
                <option value="Machala">Machala</option>
                <option value="Durán">Durán</option>
              </>
            )}
            {formData.country === "EG" && (
              <>
                <option value="Cairo">Cairo</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Giza">Giza</option>
                <option value="Shubra El-Kheima">Shubra El-Kheima</option>
                <option value="Port Said">Port Said</option>
                <option value="Suez">Suez</option>
              </>
            )}
            {formData.country === "FR" && (
              <>
                <option value="Paris">Paris</option>
                <option value="Marseille">Marseille</option>
                <option value="Lyon">Lyon</option>
                <option value="Toulouse">Toulouse</option>
                <option value="Nice">Nice</option>
                <option value="Nantes">Nantes</option>
              </>
            )}
            {formData.country === "GA" && (
              <>
                <option value="Libreville">Libreville</option>
                <option value="Port-Gentil">Port-Gentil</option>
                <option value="Franceville">Franceville</option>
                <option value="Oyem">Oyem</option>
                <option value="Moanda">Moanda</option>
                <option value="Lambaréné">Lambaréné</option>
              </>
            )}
            {formData.country === "GM" && (
              <>
                <option value="Banjul">Banjul</option>
                <option value="Serrekunda">Serrekunda</option>
                <option value="Brikama">Brikama</option>
                <option value="Bakau">Bakau</option>
                <option value="Farafenni">Farafenni</option>
                <option value="Lamin">Lamin</option>
              </>
            )}
            {formData.country === "GE" && (
              <>
                <option value="Tbilisi">Tbilisi</option>
                <option value="Batumi">Batumi</option>
                <option value="Kutaisi">Kutaisi</option>
                <option value="Rustavi">Rustavi</option>
                <option value="Zugdidi">Zugdidi</option>
                <option value="Gori">Gori</option>
              </>
            )}
            {formData.country === "DE" && (
              <>
                <option value="Berlin">Berlin</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Munich">Munich</option>
                <option value="Cologne">Cologne</option>
                <option value="Frankfurt">Frankfurt</option>
                <option value="Stuttgart">Stuttgart</option>
              </>
            )}
            {formData.country === "QA" && (
              <>
                <option value="Doha">Doha</option>
                <option value="Al Rayyan">Al Rayyan</option>
                <option value="Umm Salal Muhammad">Umm Salal Muhammad</option>
                <option value="Al Wakrah">Al Wakrah</option>
                <option value="Al Khor">Al Khor</option>
                <option value="Dukhan">Dukhan</option>
              </>
            )}
            {formData.country === "PL" && (
              <>
                <option value="Warsaw">Warsaw</option>
                <option value="Krakow">Krakow</option>
                <option value="Łódź">Łódź</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Poznań">Poznań</option>
                <option value="Gdańsk">Gdańsk</option>
              </>
            )}
            {formData.country === "PK" && (
              <>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Multan">Multan</option>
                <option value="Peshawar">Peshawar</option>
              </>
            )}
            {formData.country === "PT" && (
              <>
                <option value="Lisbon">Lisbon</option>
                <option value="Porto">Porto</option>
                <option value="Amadora">Amadora</option>
                <option value="Braga">Braga</option>
                <option value="Coimbra">Coimbra</option>
                <option value="Funchal">Funchal</option>
              </>
            )}
            {formData.country === "RU" && (
              <>
                <option value="Moscow">Moscow</option>
                <option value="Saint Petersburg">Saint Petersburg</option>
                <option value="Novosibirsk">Novosibirsk</option>
                <option value="Yekaterinburg">Yekaterinburg</option>
                <option value="Nizhny Novgorod">Nizhny Novgorod</option>
                <option value="Kazan">Kazan</option>
              </>
            )}

            </select>
            <span className="error">{errors.city}</span>
          </div>

          <div className="form-field">
            <label>PAN No:</label>
            <input
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
            />
            <span className="error">{errors.panNo}</span>
          </div>

          <div className="form-field">
            <label>Aadhar No:</label>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
            />
            <span className="error">{errors.aadharNo}</span>
          </div>

          <button type="submit"className="submit-button">Submit</button>

        </form>
      ) : (
        <div className="submitted-details">
          <h2><u>Submitted Details</u></h2>
          <div>
            <strong>First Name:</strong> {formData.firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {formData.lastName}
          </div>
          <div>
            <strong>Username:</strong> {formData.username}
          </div>
          <div>
            <strong>Email:</strong> {formData.email}
          </div>
          <div>
            <strong>Phone Number:</strong> {formData.countryCode} {formData.phoneNumber}
          </div>
          <div>
            <strong>Country:</strong> {formData.country}
          </div>
          <div>
            <strong>City:</strong> {formData.city}
          </div>
          <div>
            <strong>PAN No:</strong> {formData.panNo}
          </div>
          <div>
            <strong>Aadhar No:</strong> {formData.aadharNo}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
