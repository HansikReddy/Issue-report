import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery';

class AdminsIssueLIst extends React.Component {

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
                { title: "USER DETAILS", data: "DETAILS" },
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
                    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">USER REPORTED ISSUES</h3>
                    <div class="card-body">
                        <div id="table" class="table-editable">
                            <div class="form-row">
                                <div class="form-group col-md-2">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>ALL</option>
                                        <option>OPEN</option>
                                        <option>CHECKING</option>
                                        <option>CLOSED</option>
                                    </select>
                                    <small id="passwordHelpBlock" class="form-text text-muted">Filter Reported Issues By Status</small>
    
                                </div>
                                <div class="form-group col-md-2" style={{ "padding-top": "7px" }}>
                                    <button type="button" class="btn btn-primary btn-rounded btn-sm my-0">FILTER</button>
                                </div>
                            </div>
                            <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                            <table id="issuesList" class="table table-bordered table-responsive-md table-striped text-center" ref={(el) => (this.el = el)}>
                            {/* </table>/<table id="issuesList" class="table table-bordered table-responsive-md table-striped text-center"> */}
    
                                <thead>
                                    <tr>
                                        <th class="text-center">STATUS</th>
                                        <th class="text-center">USER DETAILS</th>
                                        <th class="text-center">ISSUE OCCURED DATE</th>
                                        <th class="text-center">DESCRIPTION</th>
                                        <th class="text-center">STEP'S TO REPRODUCE ISSUE</th>
                                        <th class="text-center">ATTACHMENT'S</th>
                                        <th class="text-center">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span class="badge badge-warning">OPEN</span></td>
                                        <td class="pt-3-half">hansik@gmail.com</td>
                                        <td class="pt-3-half">2020-11-25 11:12 AM</td>
                                        <td class="pt-3-half">BUG-1</td>
                                        <td class="pt-3-half"> Unable to report issue </td>
                                        <td class="pt-3-half"> </td>
                                        <td>
                                            <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">DELETE</button></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="badge badge-success">CLOSED</span></td>
                                        <td class="pt-3-half">reddy@gmail.com</td>
                                        <td class="pt-3-half">2020-11-20 11:12 AM</td>
                                        <td class="pt-3-half">BUG-2</td>
                                        <td class="pt-3-half">Unable to save the issue</td>
                                        <td class="pt-3-half"> </td>
                                        <td>
                                            <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">DELETE</button></span>
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
    export default AdminsIssueLIst;