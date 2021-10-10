let c = console.log;
let grids = [];

for(let i = 1; i<=5; i++){
	grids.push(document.getElementById('grid'+i));

		grids[i-1].addEventListener('click', function(){

			grids[4].style.height = '400px';

			let others = grids.filter((currentValue)=>{

				if(this != currentValue){
					return this;
				}
			})

			this.style.width = '650px';
			this.style.height = '500px';
			this.style.opacity = 1;
			this.style.marginLeft = '250px';

			if(this == grids[0]){
				document.body.style.backgroundImage = 'url(https://www.xtrafondos.com/wallpapers/vertical/death-stranding-2021-6624.jpg)';
				grids[4].style.backgroundImage = 'url(https://i.pinimg.com/originals/69/78/37/69783714fef31d0490a55586d9340721.gif)'
			}

			if(this == grids[1]){
				document.body.style.backgroundImage = 'url(https://i.pinimg.com/736x/0d/59/ce/0d59cebe9b3435a3aff1ae0a95f9850c.jpg)';
				this.style.marginTop = '-230px';
				grids[4].style.backgroundImage = 'url(https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5e7a2372b489d73ea5cea1aa_5e7a2448a066424cdc396f0e/orig)'
			}

			if(this == grids[2]){
				document.body.style.backgroundImage = 'url(https://www.kolpaper.com/wp-content/uploads/2020/06/Cyberpunk-2077-Iphone-Backgrounds.jpg)';
				this.style.marginTop = '-450px';
				grids[4].style.backgroundImage = 'url(https://thumbs.gfycat.com/ComplicatedSpectacularAttwatersprairiechicken-size_restricted.gif)'
			}

			if(this == grids[3]){
				document.body.style.backgroundImage = 'url(https://i.redd.it/phxz51gb50231.png)';
				this.style.marginTop = '-670px';
				grids[4].style.backgroundImage = 'url(https://i.gifer.com/origin/08/086e7ce6e1615e2e3af5f2bc589ea576.gif)'
			}

			for(let i = 0; i<=2; i++){
				others[i].style.opacity = 0.5;
				others[i].style.marginTop = 0;
				others[i].style.width = '200px';
				others[i].style.height = '200px';
				others[i].style.marginLeft = 0;
			}

	})

}
