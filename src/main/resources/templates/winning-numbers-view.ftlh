<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OPAP Api</title>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="/css/main.css">
    </head>
    <body class="bg-dark text-white">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8">
                    <table class="table table-dark text-center table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Number</th>
                                <th>Times Seen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <#list winningNumbers as w>
                                <tr>
                                    <td>${w_index}</td>
                                    <td>${w.number}</td>
                                    <td>${w.timesShown}</td>
                                </tr>
                            </#list>
                            <tr>
                                <td colspan="3">
                                    <button id="update-numbers" class="btn btn-primary btn-block font-weight-bold">Update</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>