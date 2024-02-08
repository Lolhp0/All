var panel_tier = document.getElementById('input-tier');
var panel_username = document.getElementById('input-username');
var panel_rank = document.getElementById('input-rank');
var panel_btn = document.getElementById('panel-upload');

// panel_btn.disabled = true;

panel_btn.addEventListener('click', () => {
    for(let i=1; i<=1; i++){
            if(panel_tier.value === "Tier 1" && panel_rank.value === "High"){
                let tier1_h = document.getElementsByClassName('tier1-clmn-ht')[0];
                let div = document.createElement('div');
                div.classList.add('player-ht');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier1_h.append(div);
            }else if(panel_tier.value === "Tier 1" && panel_rank.value === "Low"){
                let tier1_l = document.getElementsByClassName('tier1-clmn-lt')[0];
                let div = document.createElement('div');
                div.classList.add('player-lt');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier1_l.append(div);
            }

            if(panel_tier.value === "Tier 2" && panel_rank.value === "High"){
                let tier2_h = document.getElementsByClassName('tier2-clmn-ht')[0];
                let div = document.createElement('div');
                div.classList.add('player-ht');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier2_h.append(div);
            }else if(panel_tier.value === "Tier 2" && panel_rank.value === "Low"){
                let tier2_l = document.getElementsByClassName('tier2-clmn-lt')[0];
                let div = document.createElement('div');
                div.classList.add('player-lt');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier2_l.append(div);
            }

            if(panel_tier.value === "Tier 3" && panel_rank.value === "High"){
                let tier3_h = document.getElementsByClassName('tier3-clmn-ht')[0];
                let div = document.createElement('div');
                div.classList.add('player-ht');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier3_h.append(div);
            }else if(panel_tier.value === "Tier 3" && panel_rank.value === "Low"){
                let tier3_l = document.getElementsByClassName('tier3-clmn-lt')[0];
                let div = document.createElement('div');
                div.classList.add('player-lt');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier3_l.append(div);
            }

            if(panel_tier.value === "Tier 4" && panel_rank.value === "High"){
                let tier4_h = document.getElementsByClassName('tier4-clmn-ht')[0];
                let div = document.createElement('div');
                div.classList.add('player-ht');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier4_h.append(div);
            }else if(panel_tier.value === "Tier 4" && panel_rank.value === "Low"){
                let tier4_l = document.getElementsByClassName('tier4-clmn-lt')[0];
                let div = document.createElement('div');
                div.classList.add('player-lt');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier4_l.append(div);
            }

            if(panel_tier.value === "Tier 5" && panel_rank.value === "High"){
                let tier5_h = document.getElementsByClassName('tier5-clmn-ht')[0];
                let div = document.createElement('div');
                div.classList.add('player-ht');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier5_h.append(div);
            }else if(panel_tier.value === "Tier 5" && panel_rank.value === "Low"){
                let tier5_l = document.getElementsByClassName('tier5-clmn-lt')[0];
                let div = document.createElement('div');
                div.classList.add('player-lt');
                div.innerHTML = panel_username.value;
                div.title = panel_username.value;
                tier5_l.append(div);
            }
    }

    panel_tier.value = "";
    panel_username.value = "";
    panel_rank.value = "";
})