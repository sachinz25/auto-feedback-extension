
window.addEventListener("message", async (event) => {
    if (event.data.type === "START_FEEDBACK") {
        const rating = event.data.rating;

        const select = document.querySelector("select[id*='ddlCourse']");
        const options = Array.from(select.options).filter(o => o.value !== "0");

        for (let i = 0; i < options.length; i++) {
            select.value = options[i].value;
            select.dispatchEvent(new Event("change"));
            await new Promise(resolve => setTimeout(resolve, 2000));

            document.querySelectorAll("table[id*='rblCourse']").forEach(table => {
                const radios = table.querySelectorAll("input[type='radio']");
                const target = radios[rating - 1];
                if (target) target.click();
            });

            document.querySelector("input[id*='btnSubmit']").click();
            await new Promise(resolve => setTimeout(resolve, 8000));
        }

        alert("Feedback automation complete!");
    }
});
