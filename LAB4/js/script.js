async function pageLoad(){

    let zipCodeResult = await fetch ("https://csumb.space/api/cityInfoAPI.php?zip=93955")

    let zipCodeData = await zipCodeResult.json();

    console.log(zipCodeData);
}

pageLoad();