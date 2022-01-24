
$(document).ready(function () {
    let started = false;
    $("#start").click(() => {
        reset();
        $(".boundary").mouseenter(() => {
            youLose();
        });

        $(document).mouseenter(() => {
            youLose();
        });

        $('#maze').mouseleave(() => {
            youLose();
        });

        $("#end").mouseenter(() => {
            if (started) {
                $("#status").text('You win :)');
                started = false;
            }
        });
    });

    function youLose() {
        if (started) {
            $("#status").text('You lose!');
            $(".boundary").addClass("youlose");
            started = false;
        }
    }

    function reset() {
        started = true;
        $(".boundary").removeClass("youlose");
        $("#status").text('Click the "S" to begin.');
    }
});