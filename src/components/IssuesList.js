import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery';

class IssuesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            loading: true,
            show: false
        };
    }

    async getIssuesListData() {
        const res = [];
        this.setState({ loading: false, issues: res.data });
    }

    componentDidMount() {
        this.getIssuesListData().then(() => this.syncTable());
    }

    syncTable() {
        this.$el = $(this.el);
        this.$el.DataTable({
            data: this.state.issues,
            columns: [
                { title: "STATUS", data: "FIRST_NAME" },
                { title: "ISSUE TYPE", data: "LAST_NAME" },
                { title: "ISSUE OCCURED DATE", data: "EMAIL" },
                { title: "DESCRIPTION", data: "DATE_FORMATTED" },
                { title: "STEP'S TO REPRODUCE ISSUE", data: "AGE" },
                { title: "ACTION", data: "EDIT" }
            ],
            lengthMenu: [[5, 10, 15, -1], [5, 10, 15, "All"]]
        });
    }

    render() {
        return (
            <form>
                <div class="card">
                    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">REPORTED ISSUES</h3>
                    <div class="card-body">
                        <div id="table" class="table-editable">
                            <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                            {/* <table id="issuesList" class="table table-bordered table-responsive-md table-striped text-center" ref={(el) => (this.el = el)}> */}
                            <table id="issuesList" class="table table-bordered table-responsive-md table-striped text-center">
                            <thead>
                                <tr>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Issue Occured Date</th>
                                    <th class="text-center">Description</th>
                                    <th class="text-center">Steps To Re-Produce Issue</th>
                                    <th class="text-center">Photo / Video</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td><span class="table-remove"><button type="button" class="btn btn-primary btn-rounded btn-sm my-0">OPEN</button></span></td>
                                    <td class="pt-3-half">2020-11-25 11:12 AM</td>
                                    <td class="pt-3-half">Unable to report issue</td>
                                    <td class="pt-3-half"> -- </td>
                                    <td class="pt-3-half"> </td>
                                    <td>
                                        <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">DELETE</button></span>
                                    </td>
                                </tr>
                                <tr>
                                <td><span class="table-remove"><button type="button" class="btn btn-success btn-rounded btn-sm my-0">CLOSED</button></span></td>
                                    <td class="pt-3-half">2020-11-20 11:12 AM</td>
                                    <td class="pt-3-half">Unable to save the issue</td>
                                    <td class="pt-3-half">----</td>
                                    <td class="pt-3-half"> </td>
                                    <td>
                                        <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">DELETE</button></span>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default IssuesList;