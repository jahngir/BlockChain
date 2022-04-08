


	const post = {};

	post.userID = 922;
	post.username = "Mark"
	post.userprofile = "https://scontent.fkhi3-1.fna.fbcdn.net/v/t1.6435-9/133114804_150715896839386_8515124983458015171_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE0KPO_eNptIJ0xqIre5pSsQvb4CM3O-pJC9vgIzc76ksKfPfRYY4TP8QuRhiZdRQDhv3nGIUy83VWGJ92tbAg8&_nc_ohc=hHG4hPE_yE4AX9x3EOz&tn=KsIe9NExocDVy0EP&_nc_ht=scontent.fkhi3-1.fna&oh=00_AT-gsPvVQN7oQnkeDtTDM963NtI_fgqf_E58mEI9E1uvKA&oe=625F3D7F"
	post.post = "This world is going to end soon 🤔"
	post.imagesPath = ["/public/images/0.png","https://123.com","https://123.com"]
	post.type = "public"
	post.likesCount = 120
	post.likes = [{
		"username":"luck",
		"userprofile":"https://example.com/2.jpg",
		"timestamp":"1678203213",
		"likeType":"🤝"
	},{
		"username":"luck",
		"userprofile":"https://example.com/2.jpg",
		"timestamp":"1678203213",
		"likeType":"🤝"
	},{
		"username":"luck",
		"userprofile":"https://example.com/2.jpg",
		"timestamp":"1678203213",
		"likeType":"🤝"
	}
	]


post.comments = [{
	"username":"paul",
	"content":"hello world",
	"timestamp":"12323123",
	"likesCount":2,
	"likes":[{
			"username":"luck",
			"userprofile":"https://example.com/2.jpg",
			"timestamp":"1678203213",
			"likeType":"🤝"
	}],
	"replies":[{
		"username":"undefinedHacker",
		"content":"Your Account Is Hacked"
	}]
}]

// console.log(post)


 var img = document.createElement("img")
 var username = document.createElement("p")
 var postshow = document.createElement("p")
 var likes = document.createElement("p")
 username.innerText = post.username
 postshow.innerText = post.post
 likes.innerText = post.likesCount
 img.src = post.userprofile
 img.width = '200'
 img.height = '200'
 document.getElementById("profile_pic").append(img)
 document.getElementById("username").append(username)
 document.getElementById("posts").append(postshow)
 document.getElementById("likes").append(likes)




